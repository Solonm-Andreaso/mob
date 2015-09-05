Header = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },
    render() {




        return(
            <div>
                <div className="jumbotron">
                    <h1>Example page header <small>Subtext for header</small></h1>
                </div>
                <MainMenu />
            </div>

        )
    }
})