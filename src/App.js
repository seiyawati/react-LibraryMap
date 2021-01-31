// import axios from 'axios'
import { Button } from '@material-ui/core'
import axios from 'axios'

const api_key = {}

const App = () => {
  const draeMap = () => {
    axios(api_key)
      .then((response) => {console.log(response)})
      .catch((error) => {console.log(error)})
  }
  return <Button>click</Button>
}

export default App
