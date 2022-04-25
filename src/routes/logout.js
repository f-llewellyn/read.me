export async function get(event) {
	event.locals.user = null;
	event.locals.repos_url = null;
	event.locals.avatar_url = null;
	event.locals.token = null;

	return {
		status: 302,
		headers: {
			location: "/editor",
		},
	};
}
