import cookie from "cookie";

export async function handle({ event, resolve }) {
	// Empty string in case of user not being logged in
	const cookies = cookie.parse(event.request.headers.get("cookie") || "");
	// Store the value from cookies in the local storage
	event.locals.token = cookies.token;
	event.locals.user = cookies.user;
	event.locals.repos_url = cookies.repos_url;
	event.locals.avatar_url = cookies.avatar_url;
	const response = await resolve(event);

	// Set a cookie of the username stored in sveltekit local storage that is accessable from any directory and is only editble by http
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
