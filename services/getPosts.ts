const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

async function getAllPosts() {
  const response = await fetch(baseUrl, {
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
  const response = await fetch(`${baseUrl}/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error(`Server error: unable to fetch post #${id} data`);
  }

  return response.json();
}

const getPostsBySearch = async (searchQuery: string) => {
  const response = await fetch(`${baseUrl}?q=${searchQuery}`);

  if (!response.ok) {
    throw new Error('Server error: unable to fetch requested posts');
  }

  return response.json();
};

export { getAllPosts, getSinglePostData, getPostsBySearch };
