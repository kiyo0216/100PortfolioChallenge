import * as React from "react"
import { Link } from 'gatsby'

import 'normalize.css'
import '../css/global.css'

export default function IndexPage() {
  return (
    <div>
      Currently Working...
      <Link to="/portfolio1">Portfolio 1</Link>
    </div>
  )
}