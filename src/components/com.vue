<template>
    <div class="foo btn">
        hi
        <div class="cc">cc</div>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				name: "edwardelric"
            };
		},
        created() {
			console.log("aa");
			console.log(process.env.APP_DESCRIPTION);
        }
	};
</script>

<style>
    .foo {
        display: flex;
        justify-content: space-between;
    }
</style>