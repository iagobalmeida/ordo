import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const statusList = ['new', 'developing', 'testing', 'failed', 'done'];

const randomStatus = () => {
  return statusList[parseInt(statusList.length*Math.random())];
}

const randomTasks = () => {
  let tasks = [];
  let newTasks = false;
  while(Math.random() < 0.6 || tasks.length < 1) {
    let status = randomStatus();
    tasks.push({
      creator:      'PO',
      responsible:  'Desenvolvedor',
      title:        `Tarefa ${tasks.length + 1}`,
      status:       newTasks ? 'new' : status
    })
    newTasks = newTasks ? true : status != 'done';
  }
  return tasks;
}

const randomHistories = () => {
  let histories = [];
  while(Math.random() < 0.6 || histories.length < 1) {
    histories.push({
      title: `História ${histories.length + 1}`,
      tasks: randomTasks()
    })
  }
  return histories;
}

const createSprint = (index) => (
  {
    title: `Sprint ${index}`,
    id:    `sprint_${index}`,
    histories: randomHistories()
  }
)

const fakeAPI = () => [0, 0, 0, 0].map((a, aIndex) => (createSprint(aIndex)));

const data = fakeAPI();
console.log(data);

export default new Vuex.Store({
  state: () => ({
    sprints: fakeAPI(),
    users: [
      {
        id: 0,
        name: 'PO'
      },
      {
        id: 1,
        name: 'Desenvolvedor'
      },
    ]
    // [
    //   {
    //     title: 'Sprint 01',
    //     id:    'sprint_01',
    //     histories: [
    //       {
    //         title: 'História 01',
    //         tasks: [{status: 'developing'}, {}, {}]
    //       },
    //       {
    //         title: 'História 02',
    //         tasks: [{status: 'done'}, {status: 'developing'}]
    //       },
    //       {
    //         title: 'História 03',
    //         tasks: [{status: 'failed'}]
    //       }
    //     ]
    //   }
    // ]
  }),
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
