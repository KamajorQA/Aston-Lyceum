let baseUrl = '';

if (process.env.NODE_ENV !== 'production') {
  baseUrl = 'http://localhost:3000';
} else {
  baseUrl = 'https://aston-lyceum.vercel.app';
}

async function getAllPosts() {
  const response = await fetch('/api/instructions', {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error('Server error: unable to fetch all posts');
  }

  return response.json();
}

async function getSinglePostData(id: string) {
  const response = await fetch(`${baseUrl}/api/instructions/${id}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error(`Server error: unable to fetch post #${id} data`);
  }

  return response.json();
}

const getPostsBySearch = async (searchQuery: string) => {
  // const response = await fetch(`${baseUrl}?q=${searchQuery}`);
  const response = await fetch(`${baseUrl}/api/instructions?q=${searchQuery}`);

  if (!response.ok) {
    throw new Error('Server error: unable to fetch requested posts');
  }

  return response.json();
};

export { getAllPosts, getSinglePostData, getPostsBySearch };
