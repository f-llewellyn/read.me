import cookie from "cookie";

export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get("cookie") || "");
	// do some stuff before
	event.locals.user = cookies.user;
	const response = await resolve(event);

	// do some stuff after
	response.headers.append(
		"set-cookie",
		`user=${event.locals.user || ""}; path=/; HttpOnly`
	);
	return response;
}

export async function getSession(event) {
	return {
		user: event.locals.user,
	};
}
