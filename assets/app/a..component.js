@Component({
    selector: 'my-app',
    template: `
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <article class="panel panel-default">
                    <div class="panel-body">
                        {{ message.content }}
                    </div>
                    <footer class="panel-footer">
                        <div clas="author">
                            {{ message.author }}
                        </div>
                        <div clas="config">
                            <a href="#">Edit</a>
                            <a href="#">Delete</a>
                        </div>
                    </footer>
                </article>
            </div>
        </div>
    `
})
export class AppComponent(){
    message = {
        content: 'A message',
        author: 'Max'
    };
}