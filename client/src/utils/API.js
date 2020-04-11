import axios from "axios";

export default {
	postComment: (comment) => {
		return axios.post("/api/comments", comment);
	}
}