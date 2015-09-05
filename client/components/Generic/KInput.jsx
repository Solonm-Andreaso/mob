/*
    Input Generator
    ----------------------
    TODO:
        1. Need to handle input functions
        2. Make template for checkbox, radio
*/

KInput = React.createClass({
    propTypes: {
        label: React.PropTypes.string,
        type: React.PropTypes.string,
        name: React.PropTypes.string,
        value: React.PropTypes.string
    },
    shouldComponentUpdate() {
        return true;
    },
    render() {

        const { label, type, name, value } = this.props

        return(
            <div className="form-group">
              <label>{label}</label>
              <input type={type} className="form-control" value={value} name={name} ref={name} placeholder={label} />
            </div>
          )
    }
})
