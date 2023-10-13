async function getAllPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error('Server error: unable to fetch all posts');
  }

  return response.json();
}

async function getSinglePostData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Server error: unable to fetch post #${id} data`);
  }

  return response.json();
}

export { getAllPosts, getSinglePostData };
