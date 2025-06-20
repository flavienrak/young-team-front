import api from '@/axios/axios.instance';

const createArticleService = async (formData: FormData) => {
  try {
    const res = await api.post('/article', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    return { error: `CREATE ARTICLE SERVICE ERROR: ${error}` };
  }
};

const gettArticleService = async (id: number) => {
  try {
    const res = await api.get(`/article/${id}`);
    return res.data;
  } catch (error) {
    return { error: `GET ARTICLE SERVICE ERROR: ${error}` };
  }
};

export { createArticleService, gettArticleService };
