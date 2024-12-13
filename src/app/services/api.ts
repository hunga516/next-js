import axios from "axios";

export const getBlogs  = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/Blog/Read`, {
            params: {
                page: 1,
                pageSize: 6,
                status: "published"
            },
        });
        return response.data.blogs;
    } catch (e) {
        console.log(e);
    }
};