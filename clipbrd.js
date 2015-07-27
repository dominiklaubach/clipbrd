var clipbrd = {
    input: null,

    init: function() {
        if( !this.input ) {
            this.input = document.createElement('input');
            this.input.type = 'text';
            this.input.id = 'clipbrd_input';

            this.input.style.position = 'fixed';
            this.input.style.top = '-1px';
            this.input.style.left = '-1px';
            this.input.style.width = '1px';
            this.input.style.height = '1px';
            this.input.style.visibility = 'hidden';
            this.input.style.opacity = '0';
            this.input.style.border = 'none';
            this.input.style.padding = '0';
            this.input.style.margin = '0';

            document.getElementsByTagName('body')[0].appendChild(this.input);
        }

    },

    copy: function( text, onSuccess, onError ) {
        var that = this;

        this.input.style.top = '0';
        this.input.style.left = '0';
        this.input.style.width = 'auto';
        this.input.style.height = 'auto';
        this.input.style.visibility = 'visible';
        this.input.style.opacity = '0';

        this.input.value = text;

        window.setTimeout(function() {
            if( typeof(that.input.focus) === 'function' ) {
                that.input.focus();
            }

            that.input.setSelectionRange(0, that.input.value.length);

            var success = false;
            try {
                success = !!document.execCommand('copy');
            } catch( err ) {
                if( onError ) {
                    onError();
                }

                return;
            }

            if( onSuccess ) {
                onSuccess(that.input.value);
            }
        })
    }
};

(function() {
    window.addEventListener('load', function() {
        clipbrd.init();
    })
})();