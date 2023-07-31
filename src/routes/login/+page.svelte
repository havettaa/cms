<script>
	export let registerObj = { name: "Meno", emailId: "emId", password: "pwd" };
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<main class="min-h-screen bg-base-200 flex items-center">
	<div class="card mx-auto w-full max-w-5xl  shadow-xl">
			<div class="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
			<div class='py-24 px-10'>
					<h2 class='text-2xl font-semibold mb-2 text-center'>Register</h2>
					<form>

							<div class="mb-4">

									<input value={registerObj.name} class="mt-4" title="Name" />

									<input value={registerObj.emailId} class="mt-4" title="Email Id" />

									<input value={registerObj.password} type="password" class="mt-4" title="Password" />

							</div>

							<button type="submit" class="btn mt-2 w-full btn-primary">Register</button>

							<div class='text-center mt-4'>Already have an account? <a href="/login"><span class="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></a></div>
					</form>
			</div>
	</div>
	</div>
</main>

