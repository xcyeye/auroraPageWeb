<template>
	<div>
		<header id="c-navbar" class="aurora-header header-bg-show navbar">
			<n-space justify="space-around">
				<router-link to="/">首页</router-link>
			</n-space>
		</header>
	</div>
</template>

<script lang="ts" setup>
import {defineComponent} from "vue";

defineComponent({name: 'index'});
</script>