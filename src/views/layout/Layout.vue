<template>
</template>

<script>
  import Sidebar from './components/Sidebar'//侧边栏
  import Navbar from './components/Navbar'//
  import AppMain from './components/AppMain'
  import TagsView from './components/TagsView'
  import HeadTop from './components/HeadTop'

  export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    TagsView,
  },
  // computed: {
  // },
  // methods: {
  // }
}
</script>


<!-- <script>
import Foot from './foot'
import NavMenu from './navmenu'
import Login from './login'
import Xlink from './link'
import Xtitle from './title'
import Xcontent from './content'

export default {
  Foot,
  NavMenu,
  Login,
  Xtitle,
  Xlink,
  Xcontent
}
</script>
