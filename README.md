###package.json
```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "run": "webpack-dev-server"
  },
```

###With class
Should always have render method that should an element.
```js
class App extends React.Component {
    render() {
        return <div>Hello World !</div>
    }
}
```

###With class
Only for stateless component
```js
const App = () => <div>Hello World !</div>
}
```

##Method render()
 - should only return one element

##Method properties

###propsType
```js
App.propTypes = {
    label: React.PropTypes.string
    details: React.PropTypes.string.isRequired
};
```

###propsType
```js
App.defaultProps = {
    label: "Loading the questions"
};
```
