const tokenURL = "https://github.com/login/oauth/access_token";
const userURL = "https://api.github.com/user";
const clientId = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;

async function getToken(code) {
	const res = await fetch(tokenURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			client_id: clientId,
			client_secret: secret,
			code,
		}),
	});
	const data = await res.json();
	return data.access_token;
}

async function getUser(token) {
	const res = await fetch(userURL, {
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await res.json();
	return data;
}

export async function get(event) {
	const code = event.url.searchParams.get("code");
	// Get access token
	const token = await getToken(code);

	// Get user
	const user = await getUser(token);
	event.locals.token = token;
	event.locals.user = user.login;
	event.locals.repos_url = user.repos_url;
	event.locals.avatar_url = user.avatar_url;

	return {
		status: 302,
		headers: {
			location: "/github",
		},
	};
}
