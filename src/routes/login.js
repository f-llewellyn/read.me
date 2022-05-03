// Address to make a request to
const target = "https://github.com/login/oauth/authorize";
// Import from environment variables
const clientId = import.meta.env.VITE_CLIENT_ID;

// Send a request to the target URL with some parameters
export async function get(request) {
	const sessionId = "1234";
	return {
		// 302 is a redirect status code
		status: 302,
		headers: {
			location: `${target}?client_id=${clientId}&state=${sessionId}`,
		},
	};
}
