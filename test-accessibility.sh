#!/bin/bash

# Accessibility Testing Script
# Runs comprehensive accessibility tests using pa11y, Lighthouse, and axe-core

echo "🔍 Starting Comprehensive Accessibility Testing..."
echo "=============================================="

# Check if server is running
if ! curl -s http://localhost:3000 > /dev/null; then
    echo "❌ Error: Development server not running on port 3001"
    echo "Please run 'npm run dev' in the Next.js project first"
    exit 1
fi

echo "✅ Development server is running"

# Create test results directory
mkdir -p accessibility-test-results
cd accessibility-test-results

# Clear previous results
rm -rf *

echo ""
echo "🧪 Running pa11y tests..."
echo "========================"

# URLs to test
URLS=(
    "http://localhost:3000"
    "http://localhost:3000/about"
    "http://localhost:3000/projects" 
    "http://localhost:3000/contact"
    "http://localhost:3000/projects/case-study/shopify-conversion-optimization"
)

# Run pa11y tests
for url in "${URLS[@]}"; do
    page_name=$(echo $url | sed 's|http://localhost:3000||' | sed 's|/|-|g' | sed 's|^-||')
    if [ -z "$page_name" ]; then
        page_name="home"
    fi
    
    echo "Testing: $url"
    npx pa11y --standard WCAG2AA --reporter html --timeout 30000 "$url" > "pa11y-${page_name}.html" 2>&1
    npx pa11y --standard WCAG2AA --reporter json --timeout 30000 "$url" > "pa11y-${page_name}.json" 2>&1
done

echo ""
echo "🔦 Running Lighthouse accessibility audits..."
echo "============================================"

# Run Lighthouse tests
for url in "${URLS[@]}"; do
    page_name=$(echo $url | sed 's|http://localhost:3000||' | sed 's|/|-|g' | sed 's|^-||')
    if [ -z "$page_name" ]; then
        page_name="home"
    fi
    
    echo "Lighthouse testing: $url"
    npx lighthouse "$url" \
        --only-categories=accessibility \
        --output=html \
        --output=json \
        --output-path="lighthouse-${page_name}" \
        --chrome-flags="--headless --no-sandbox --disable-gpu" \
        --quiet || true
done

echo ""
echo "⚡ Running axe-core tests..."
echo "=========================="

# Create axe test script
cat > axe-test.js << 'EOF'
const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require('fs');

const urls = [
    'http://localhost:3000',
    'http://localhost:3000/about',
    'http://localhost:3000/projects',
    'http://localhost:3000/contact',
    'http://localhost:3000/projects/case-study/shopify-conversion-optimization'
];

async function runAxeTests() {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    
    for (const url of urls) {
        const page = await context.newPage();
        
        try {
            console.log(`Testing: ${url}`);
            await page.goto(url, { waitUntil: 'networkidle' });
            
            const results = await new AxeBuilder({ page })
                .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
                .analyze();
            
            const pageName = url.replace('http://localhost:3000', '') 
                .replace(/\//g, '-')
                .replace(/^-/, '') || 'home';
            
            fs.writeFileSync(`axe-${pageName}.json`, JSON.stringify(results, null, 2));
            
            // Generate HTML report
            const htmlReport = `
<!DOCTYPE html>
<html>
<head>
    <title>Axe Accessibility Report - ${pageName}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .violation { background: #ffebee; padding: 10px; margin: 10px 0; border-left: 4px solid #f44336; }
        .pass { background: #e8f5e8; padding: 10px; margin: 10px 0; border-left: 4px solid #4caf50; }
        .incomplete { background: #fff3e0; padding: 10px; margin: 10px 0; border-left: 4px solid #ff9800; }
        .summary { background: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px; }
        h1, h2 { color: #333; }
        pre { background: #f5f5f5; padding: 10px; overflow-x: auto; }
    </style>
</head>
<body>
    <h1>Axe Accessibility Report: ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>
    <div class="summary">
        <h2>Summary</h2>
        <p><strong>URL:</strong> ${url}</p>
        <p><strong>Violations:</strong> ${results.violations.length}</p>
        <p><strong>Passes:</strong> ${results.passes.length}</p>
        <p><strong>Incomplete:</strong> ${results.incomplete.length}</p>
        <p><strong>Test Date:</strong> ${new Date().toLocaleString()}</p>
    </div>
    
    ${results.violations.length > 0 ? `
    <h2>Violations (${results.violations.length})</h2>
    ${results.violations.map(violation => `
        <div class="violation">
            <h3>${violation.id}: ${violation.help}</h3>
            <p><strong>Impact:</strong> ${violation.impact}</p>
            <p><strong>Description:</strong> ${violation.description}</p>
            <p><strong>Help URL:</strong> <a href="${violation.helpUrl}" target="_blank">${violation.helpUrl}</a></p>
            <p><strong>Affected Elements:</strong> ${violation.nodes.length}</p>
            ${violation.nodes.map(node => `
                <div style="margin-left: 20px; background: #fafafa; padding: 10px; margin: 5px 0;">
                    <strong>Target:</strong> <code>${node.target.join(', ')}</code><br>
                    <strong>HTML:</strong> <code>${node.html}</code><br>
                    ${node.failureSummary ? `<strong>Failure:</strong> ${node.failureSummary}` : ''}
                </div>
            `).join('')}
        </div>
    `).join('')}
    ` : '<div class="pass"><h2>No Violations Found! 🎉</h2></div>'}
    
    ${results.incomplete.length > 0 ? `
    <h2>Incomplete Tests (${results.incomplete.length})</h2>
    <p>These tests could not be completed and may require manual verification:</p>
    ${results.incomplete.map(incomplete => `
        <div class="incomplete">
            <h3>${incomplete.id}: ${incomplete.help}</h3>
            <p>${incomplete.description}</p>
        </div>
    `).join('')}
    ` : ''}
    
    <h2>Successful Tests (${results.passes.length})</h2>
    <div class="pass">
        <p>${results.passes.length} accessibility tests passed successfully.</p>
        <details>
            <summary>View passed tests</summary>
            <ul>
                ${results.passes.map(pass => `<li>${pass.id}: ${pass.help}</li>`).join('')}
            </ul>
        </details>
    </div>
</body>
</html>`;
            
            fs.writeFileSync(`axe-${pageName}.html`, htmlReport);
            
        } catch (error) {
            console.error(`Error testing ${url}:`, error.message);
        } finally {
            await page.close();
        }
    }
    
    await context.close();
    await browser.close();
    console.log('Axe tests completed!');
}

runAxeTests().catch(console.error);
EOF

# Install playwright if not available and run axe tests
if command -v npx playwright &> /dev/null; then
    node axe-test.js
else
    echo "Installing playwright for axe tests..."
    npm install --save-dev playwright @axe-core/playwright
    npx playwright install chromium
    node axe-test.js
fi

echo ""
echo "📊 Generating summary report..."
echo "============================="

# Generate summary report
cat > accessibility-summary.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Accessibility Test Summary</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
        .header { background: #2196F3; color: white; padding: 20px; margin: -20px -20px 20px; }
        .test-section { background: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px; }
        .success { color: #4caf50; font-weight: bold; }
        .warning { color: #ff9800; font-weight: bold; }
        .error { color: #f44336; font-weight: bold; }
        .file-list { background: white; padding: 10px; border-radius: 3px; }
        .file-list a { display: block; padding: 5px; text-decoration: none; color: #2196F3; }
        .file-list a:hover { background: #f0f0f0; }
        h1, h2 { color: #333; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🔍 Accessibility Test Results</h1>
        <p>Comprehensive WCAG 2.1 AA compliance testing report</p>
        <p><strong>Test Date:</strong> <script>document.write(new Date().toLocaleString());</script></p>
    </div>

    <div class="test-section">
        <h2>🧪 pa11y Test Results</h2>
        <p>WCAG 2.1 AA automated accessibility testing using pa11y</p>
        <div class="file-list">
EOF

# List pa11y files
for file in pa11y-*.html; do
    if [ -f "$file" ]; then
        page_name=$(echo $file | sed 's/pa11y-//' | sed 's/.html//' | sed 's/-/ /g')
        # Capitalize first letter in a compatible way
        page_name_cap=$(echo "$page_name" | sed 's/\b\w/\U&/g')
        echo "            <a href=\"$file\" target=\"_blank\">📄 ${page_name_cap} Page Report</a>" >> accessibility-summary.html
    fi
done

cat >> accessibility-summary.html << 'EOF'
        </div>
    </div>

    <div class="test-section">
        <h2>🔦 Lighthouse Accessibility Audits</h2>
        <p>Google Lighthouse accessibility scoring and recommendations</p>
        <div class="file-list">
EOF

# List lighthouse files
for file in lighthouse-*.report.html; do
    if [ -f "$file" ]; then
        page_name=$(echo $file | sed 's/lighthouse-//' | sed 's/.report.html//' | sed 's/-/ /g')
        # Capitalize first letter in a compatible way
        page_name_cap=$(echo "$page_name" | sed 's/\b\w/\U&/g')
        echo "            <a href=\"$file\" target=\"_blank\">💡 ${page_name_cap} Lighthouse Report</a>" >> accessibility-summary.html
    fi
done

cat >> accessibility-summary.html << 'EOF'
        </div>
    </div>

    <div class="test-section">
        <h2>⚡ axe-core Test Results</h2>
        <p>Detailed accessibility violations and compliance testing</p>
        <div class="file-list">
EOF

# List axe files
for file in axe-*.html; do
    if [ -f "$file" ]; then
        page_name=$(echo $file | sed 's/axe-//' | sed 's/.html//' | sed 's/-/ /g')
        # Capitalize first letter in a compatible way
        page_name_cap=$(echo "$page_name" | sed 's/\b\w/\U&/g')
        echo "            <a href=\"$file\" target=\"_blank\">🔧 ${page_name_cap} Axe Report</a>" >> accessibility-summary.html
    fi
done

cat >> accessibility-summary.html << 'EOF'
        </div>
    </div>

    <div class="test-section">
        <h2>📋 Manual Testing Checklist</h2>
        <p>Additional manual tests recommended for complete WCAG 2.1 AA compliance:</p>
        <ul>
            <li>Screen reader testing (NVDA, JAWS, VoiceOver)</li>
            <li>Keyboard-only navigation testing</li>
            <li>Color contrast verification (minimum 4.5:1 for normal text)</li>
            <li>Zoom testing up to 200% without horizontal scrolling</li>
            <li>Focus indicator visibility and logical tab order</li>
            <li>Form error handling and validation messages</li>
            <li>Video/audio content accessibility (if applicable)</li>
            <li>Animation and motion reduction preferences</li>
        </ul>
    </div>

    <div class="test-section">
        <h2>🎯 WCAG 2.1 AA Guidelines Covered</h2>
        <ul>
            <li><strong>Perceivable:</strong> Information and UI components must be presentable to users</li>
            <li><strong>Operable:</strong> UI components and navigation must be operable</li>
            <li><strong>Understandable:</strong> Information and operation of UI must be understandable</li>
            <li><strong>Robust:</strong> Content must be robust enough for various assistive technologies</li>
        </ul>
    </div>

    <footer style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666;">
        <p>Generated automatically by accessibility testing suite</p>
        <p>For questions about these results, please refer to the <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a></p>
    </footer>
</body>
</html>
EOF

echo ""
echo "✅ Accessibility testing completed!"
echo "================================="
echo ""
echo "📊 Results saved in: accessibility-test-results/"
echo "🌐 Open accessibility-summary.html to view all reports"
echo ""
echo "Quick access:"
echo "- Summary Report: file://$(pwd)/accessibility-summary.html"
echo "- pa11y Reports: pa11y-*.html"
echo "- Lighthouse Reports: lighthouse-*.report.html" 
echo "- Axe Reports: axe-*.html"
echo ""
echo "🎯 Next steps:"
echo "1. Review all generated reports"
echo "2. Address any violations found"
echo "3. Perform manual testing checklist"
echo "4. Re-run tests after fixes"
