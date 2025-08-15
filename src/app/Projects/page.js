import ProjectsClient from './ProjectsClient';

export const metadata = {
  title: 'Design Portfolio & Case Studies',
  description:
    'Explore a collection of detailed UX/UI design case studies from Kainen White, showcasing a rigorous process and measurable business results.',
  alternates: {
    canonical: 'https://kainenwhite.com/Projects',
  },
  openGraph: {
    title: 'Design Portfolio & Case Studies',
    description:
      'Explore a collection of detailed UX/UI design case studies from Kainen White, showcasing a rigorous process and measurable business results.',
    type: 'website',
    url: 'https://kainenwhite.com/Projects',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Portfolio & Case Studies',
    description:
      'Explore a collection of detailed UX/UI design case studies from Kainen White, showcasing a rigorous process and measurable business results.',
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
