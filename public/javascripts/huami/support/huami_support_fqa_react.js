/**
 * Created by hongbotian on 1/18/16.
 */

var SupportFqaSelector = React.createClass({
    render: function() {
        return <section className="content">
            <p className="lead"> Q&A for Scale</p>
            <div className="row">
                <div className="col-md-12">
                    <div className="box box-primary collapsed-box">
                        <div className="box-header with-border">
                            <h3 className="box-title">Expandable1</h3>
                            <div className="box-tools pull-right">
                                <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-plus"></i></button>
                            </div>
                        </div>
                        <div className="box-body">
                            The body of the box1
                        </div>
                        <div className="box-body">
                            The body of the box2
                        </div>
                    </div>
                </div>
            </div>
            <p className="lead"> Q&A for Shouhuan</p>
            <div className="row">
                <div className="col-md-12">
                    <div className="box box-default collapsed-box">
                        <div className="box-header with-border">
                            <h3 className="box-title">Expandable2</h3>
                            <div className="box-tools pull-right">
                                <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-plus"></i></button>
                            </div>
                        </div>
                        <div className="box-body">
                            The body of the box3
                        </div>
                        <div className="box-body">
                            The body of the box4
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
});

window.SupportFqaSelector = SupportFqaSelector;