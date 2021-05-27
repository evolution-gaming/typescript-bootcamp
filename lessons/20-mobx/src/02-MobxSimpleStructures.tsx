import { autorun, observable, ObservableMap, toJS } from "mobx"

export const App = () => {
  const map = new ObservableMap<string, number>()
  const array = observable<string[]>([] as string[])
  const object = observable({} as Record<string, string>)

  // console.log(array)

  const disposer = autorun(() => {
    // console.log("[autorun map]", toJS(map))
    // console.log("[autorun arr]", toJS(array))
    console.log("[autorun obj]", toJS(object))
    console.log("^^^^^^^^^^^^")
  })

  console.log("------------")

  map.set("a", 123)

  array.push("value")

  object["123"] = "asd"
  object.asd = "123"

  console.log(toJS(object))


  disposer()

  return <p>Empty app</p>
}
