import React from "react"
import { shallow } from "enzyme"

import FooBarBaz from "./index"

describe("<FooBarBaz />", () => {
  it("renders something", () => {
    shallow(<FooBarBaz />)
  })
})
