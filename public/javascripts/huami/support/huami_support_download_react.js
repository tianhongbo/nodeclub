/**
 * Created by hongbotian on 1/18/16.
 */

var SupportDownloadSelector = React.createClass({
    render: function() {
        return <div>
            <p className="lead"> Download center for scale.</p>
            <div className="row">
                <div className="col-sm-6">
                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">Scale v2.0.0 </h3>
                            <span className="label label-primary pull-right"><i className="fa fa-balance-scale"></i></span>
                        </div>
                        <div className="box-body">
                            <p>Manual for scale. <b>This is the new version.</b></p>
                            <a href="/public/download/scale.pdf" className="btn btn-primary"><i className="fa fa-download"></i> Download</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">Scale v1.0.0</h3>
                            <span className="label label-primary pull-right"><i className="fa fa-balance-scale"></i></span>
                        </div>
                        <div className="box-body">
                            <p>Manual for scale. </p>
                            <a href="/public/download/shouhuan.pdf" className="btn btn-primary"><i className="fa fa-download"></i> Download</a>
                        </div>
                    </div>
                </div>

            </div>
            <p className="lead"> Download center for Shouhuan.</p>
            <div className="row">
                <div className="col-sm-6">
                    <div className="box box-danger">
                        <div className="box-header with-border">
                            <h3 className="box-title">Shouhuan v2.0.0</h3>
                            <span className="label label-danger pull-right"><i className="fa fa-heartbeat"></i></span>
                        </div>
                        <div className="box-body">
                            <p>Manual for Shouhuan. <b>This is the new version.</b></p>
                            <a href="/public/download/scale.pdf" className="btn btn-danger"><i className="fa fa-download"></i> Download</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="box box-danger">
                        <div className="box-header with-border">
                            <h3 className="box-title">Shouhuan v1.0.0</h3>
                            <span className="label label-danger pull-right"><i className="fa fa-heartbeat"></i></span>
                        </div>
                        <div className="box-body">
                            <p>Manual for Shouhuan. </p>
                            <a href="/public/download/shouhuan.pdf" className="btn btn-danger"><i className="fa fa-download"></i> Download</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }
});

window.SupportDownloadSelector = SupportDownloadSelector;
