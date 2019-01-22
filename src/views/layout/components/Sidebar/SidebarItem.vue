<template>
  <div class="menu-wrapper">

</template>
<script>
import path from 'path'
import { generateTitle } from '@/utils/i18n'
import { isExternal } from '@/utils'
import Item from './Item'
import AppLink from './Link'
console.log(generateTitle);
export default {
	name: 'SidebarItem',
	components: { Item, AppLink },
	props: {
		item: {
			type: Object,
			required: true
		},
		isNest: {
			type: Boolean,
			default: false
		},
		basePath: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			onlyOneChild: null
		}
	},
  	methods: {
		hasOneShowingChild(children, parent) {
			const showingChildren = children.filter(item => {
				if (item.hidden) {
					return false
				} else {
					// Temp set(will be used if only has one showing child)
					this.onlyOneChild = item
					return true
				}
			})
			// When there is only one child router, the child router is displayed by default
			if (showingChildren.length === 1) {
				return true
			}
			// Show parent if there are no child router to display
			if (showingChildren.length === 0) {
			this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
				return true
			}
			return false
		},
		resolvePath(routePath) {
			if (this.isExternalLink(routePath)) {
				return routePath
			}
			return path.resolve(this.basePath, routePath)
		},
		isExternalLink(routePath) {
			return isExternal(routePath)
		},
		generateTitle
  	}
}
</script>