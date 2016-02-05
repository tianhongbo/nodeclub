/**
 * Created by hongbotian on 1/18/16.
 */

var SupportTicketCategorySelector = React.createClass({
    render: function() {
        var lis = this.props.items.map(function(item) {
            return <option key={item._id} value={item._id}>{item.name}</option>;
        });

        //add new item at beginning of array of 'lis'
        lis.unshift(<option key = {"0"} value="0">Please select a category </option>);
        return <select className="form-control">
            {lis}
        </select>
    }

});

var SupportTicketSelector = React.createClass({
    render: function() {
        return <section className="content">
            <div className="row">
                <div className="col-md-12">
                    <div className="box box-warning">
                        <div className="box-header with-border">
                            <h3 className="box-title">Our technicians will respond soon after you submit this ticket. </h3>
                        </div>
                        <div className="box-body">
                            <form role="form">
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" className="form-control" placeholder="Brief description of the issue ..." ref={(ref)=>this.subject=ref}
                                           value={this.state.detail.title}/>
                                </div>
                                <div className="form-group">
                                    <label>Product</label>
                                    <SupportTicketCategorySelector items={this.state.products} ref={(ref)=>this.product=ref}
                                                                   category={this.state.detail.category}/>
                                </div>

                                <div className="form-group">
                                    <label>Category</label>
                                    <SupportTicketCategorySelector items={this.state.categories} ref={(ref)=>this.category=ref}
                                                                   category={this.state.detail.category}/>
                                </div>

                                <div className="form-group">
                                    <label>Device Serial No</label>
                                    <input type="text" className="form-control" placeholder="Your device serial no ..." ref={(ref)=>this.serialno=ref}
                                           value={this.state.detail.title}/>
                                </div>


                                <div className="form-group">
                                    <label>Detail</label>
                                    <MarkdownSelector content={this.state.detail.content} ref={(ref)=>this.detail=ref}/>
                                </div>
                                <div>
                                    <button className="btn bg-orange btn-flat margin" onClick={this.accept}>Submit</button>
                                    <button className="btn bg-orange btn-flat margin" onClick={this.cancel}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
    },
    getInitialState: function () {
        return {
            products: [
                {
                    "_id" : "1",
                    "name" : "Scale"
                },
                {
                    "_id" : "2",
                    "name" : "Shouhuan"
                },
                {
                    "_id" : "3",
                    "name" : "others"
                }
            ],
            categories: [
                {
                    "_id" : "1",
                    "name" : "Display"
                },
                {
                    "_id" : "2",
                    "name" : "Input"
                },
                {
                    "_id" : "3",
                    "name" : "Function"
                },
                {
                    "_id" : "4",
                    "name" : "others"
                }
            ],
            detail: {}
        }
    },

    accept : function() {
        //TODO
    },

    cancel: function() {
        //TODO
    }

});

window.SupportTicketSelector = SupportTicketSelector;