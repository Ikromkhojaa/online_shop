import Vue from "vue";
  import Vuex, {mapActions, mapGetters} from "vuex";
import sidebar from "@/store/module/sidebar";


Vue.use(Vuex);

Vue.mixin(
  {
    computed: {
      ...mapGetters({
        getDrawer: 'sidebar/getDrawer'
      })
    },
    methods: {
      ...mapActions({
        setDrawer: 'sidebar/setDrawer'
      })
    }
  }
)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    sidebar,
  },
});
