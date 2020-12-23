import uuid from 'uuid'
import _ from 'lodash'

export const state = () => ({
  conditionals: [],
  conditionalsOptions: {},
})

export const mutations = {
  addCondition(state) {
    const id = uuid()
    const type = 'init'

    state.conditionals.push({ id, type })
    state.conditionalsOptions[id] = { options: [] }
  },
  deleteCondition(state, id) {
    state.conditionals = state.conditionals.filter((c) => c.id !== id)
    state.conditionalsOptions = _.omit(id, state.conditionalsOptions)
  },
}

export const getters = {
  conditionals: (s) => s.conditionals,
}
