import uuid from 'uuid'

export const state = () => ({
  conditionals: [],
  conditionalsOptions: [],
})

export const mutations = {
  addCondition(state) {
    const id = uuid()
    const type = 'init'

    state.conditionals.push({ id, type })
  },
  deleteCondition(state, id) {
    state.conditionals = state.conditionals.filter((c) => c.id !== id)
    state.conditionalsOptions = state.conditionalsOptions.filter(
      (option) => option.parentId !== id
    )
  },
  changeType(state, payload) {
    const { id, type } = payload
    const condition = state.conditionals.find((e) => e.id === id)
    condition.type = type
    state.conditionalsOptions = state.conditionalsOptions.filter(
      (option) => option.parentId !== id
    )
  },
  addSelectOption(state, payload) {
    const { parentId, value } = payload

    state.conditionalsOptions.push({ id: uuid(), parentId, value })
  },
  changeOptionValue(state, payload) {
    const { id, value } = payload
    const option = state.conditionalsOptions.find((o) => o.id === id)
    option.value = value
  },
  changeRangeValue(state, payload) {
    const { id, value } = payload
    const option = state.conditionalsOptions.find((o) => o.id === id)
    option.value = { ...option.value, ...value }
  },
}

export const getters = {
  conditionals: (s) => s.conditionals,
  getOptions: (state) => (parentId) => {
    return state.conditionalsOptions.filter(
      (option) => option.parentId === parentId
    )
  },
}
