import Head from "next/head";
import { projectsData } from "@/utils/projectsData";
import ProjectDetailHero from "@/Web_pages/ProjectDetail/projectDetailHero";
import ProjectAboutSection from "@/Web_pages/ProjectDetail/ProjectAbout";
import ProjectTechSection from "@/Web_pages/ProjectDetail/projectTech";
import ProjectDetailCTA from "@/Web_pages/ProjectDetail/ProjectCTA";

export default function ProjectDetailPage({ project }) {
  return (
    <>
      <Head>
        <title>{project.title} | Project Detail</title>
        <meta name="description" content={project.description} />
      </Head>

      <ProjectDetailHero project={project} />
      <ProjectAboutSection project={project} />
      <ProjectTechSection project={project} />
      <ProjectDetailCTA />
    </>
  );
}

export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projectsData.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}