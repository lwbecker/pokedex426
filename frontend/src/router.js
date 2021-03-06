import Vue from 'vue';
import Router from 'vue-router';
import Pokedex from './views/Pokedex.vue';
import Trainers from './views/Trainers.vue';
import TrainerCard from './views/TrainerCard.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import PokemonDetails from './components/PokemonDetails.vue';
import PokemonList from './components/PokemonList.vue';
import Team from './components/Team.vue'
import TeamList from './components/TeamList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pokedex'
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: Pokedex, 
      children: [
        {
          path: 'details/:name',
          name: 'details', 
          component: PokemonDetails,
          props: true,
        }, 
        {
          path: '',
          name: 'list',
          component: PokemonList
        }
      ]
    },
    {
      path: '/trainercard',
      name: 'trainercard',
      component: TrainerCard
    },
    {
      path: '/trainers',
      name: 'trainers',
      component: Trainers,
      props: true,
      children: [
        {
          path: 'team/:name',
          name: 'team', 
          component: Team,
          props: true,
        }, 
        {
          path: '',
          name: 'teamList',
          component: TeamList
        }
      ]
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ]
});