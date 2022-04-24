import cookie from "cookie";

export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get("cookie") || "");
	// do some stuff before
	event.locals.token = cookies.token;
	event.locals.user = cookies.user;
	event.locals.repos_url = cookies.repos_url;
	event.locals.avatar_url = cookies.avatar_url;
	const response = await resolve(event);

	// do some stuff after
	response.headers.set(
		"set-cookie",
		`user=${event.locals.user || ""}; path=/; HttpOnly`
	);
	response.headers.append(
		"set-cookie",
		`repos_url=${event.locals.repos_url || ""}; path=/; HttpOnly`
	);
	response.headers.append(
		"set-cookie",
		`avatar_url=${event.locals.avatar_url || ""}; path=/; HttpOnly`
	);
	response.headers.append(
		"set-cookie",
		`token=${event.locals.token || ""}; path=/; HttpOnly`
	);

	return response;
}

export async function getSession(event) {
	return {
		user: event.locals.user,
		repos_url: event.locals.repos_url,
		avatar_url: event.locals.avatar_url,
		token: event.locals.token,
	};
}
