<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	const getYouTubeTitle = require('get-youtube-title');

	export let videoID = 'TILjzuBGkRc'; //default value

	const title = writable('');
	const thumbnailURL = `http://img.youtube.com/vi/${videoID}/0.jpg`;
	onMount(() => {
		getYouTubeTitle(videoID, (/** @type {any} */ err, /** @type {any} */ res) => {
			console.log(res)
		})
	});
</script>

<div>
	<img src={thumbnailURL} alt="YouTube Video Thumbnail" />
	<p>{$title}</p>
</div>
