import { getProjectBySlug } from '../../../Data/projects';
import CaseStudyClient from './CaseStudyClient';

export async function generateMetadata({ params }) {
  const rawSlug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const slug = (rawSlug || '').replace(/-case-study$/, '');
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'Case study not found.'
    };
  }
  return {
    title: `${project.title} – Case Study` ,
    description: project.description || project.longDescription || `A detailed case study of ${project.title}.`,
    openGraph: {
      title: `${project.title} – Case Study`,
      description: project.description || project.longDescription || `A detailed case study of ${project.title}.`,
      type: 'article',
      url: `https://kainenwhite.com/Projects/${project.slug}-case-study`,
      images: project.images?.length ? [{ url: project.images[0] }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} – Case Study`,
      description: project.description || project.longDescription || `A detailed case study of ${project.title}.`,
      images: project.images?.length ? [project.images[0]] : undefined
    }
  };
}

export default function CaseStudyPage({ params }) {
  return <CaseStudyClient slug={Array.isArray(params?.slug) ? params.slug[0] : params?.slug} />;
}
