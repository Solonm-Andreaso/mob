Register = React.createClass({
  render() {
    return(
        <div>
            <KInput label="Username" type="text" name="username" />
            <KInput label="Password" type="password" name="password" />
            <KInput label="Confirm Password" type="password" name="confPassword" />

        </div>
    )
  }
})
