import { getCollection } from 'astro:content';

export async function GET() {
  const blogs = await getCollection('blog', ({ data }) => data.draft !== true);
  const projects = await getCollection('project', ({ data }) => data.draft !== true);

  const blogData = blogs.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    tags: [...(post.data.tags || []), ...(post.data.categories || [])],
    url: `/blog/${post.id}`,
    body: post.body || '',
    type: 'Blog',
  }));

  const projectData = projects.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    tags: post.data.techStack || [],
    url: `/projects/${post.id}`,
    body: post.body || '',
    type: 'Project',
  }));

  const searchData = [...blogData, ...projectData];

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
