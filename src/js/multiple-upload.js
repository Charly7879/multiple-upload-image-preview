// JavaScript Document

var multipleUpload = {
    initPreUpload: function (Setting) {

        // Validate
        if (typeof Setting.containerId === 'undefined') {
            alert('Error:\nDoes not exist an identifier for multiple upload');
            return;
        }

        if (typeof Setting.inputFile === 'undefined') {
            alert('Error:\nDefine the property of inputFile');
            return;
        }

        if (!Array.isArray(Setting.inputFile)) {
            alert('Error:\ninputFile must be an array');
            return;
        }

        if (!Array.isArray(Setting.inputText) && (typeof Setting.inputText !== 'undefined')) {
            alert('Error:\ninputText must be an array');
            return;
        }

        var container = document.getElementById(Setting.containerId);
        var buttonAddText = (typeof Setting.buttonAddText !== 'undefined') ? Setting.buttonAddText : 'Add +';
        var linkDeleteText = (typeof Setting.linkDeleteText !== 'undefined') ? Setting.linkDeleteText : 'Delete item';
        var inputFileName = (typeof Setting.inputFile[0] !== 'undefined') ? Setting.inputFile[0]['name'] : 'images';
        var inputFileButtonText = (typeof Setting.inputFile[1] !== 'undefined') ? Setting.inputFile[1]['buttonText'] : 'Browse';
        var inputTextName = (typeof Setting.inputText !== 'undefined') ? Setting.inputText[0]['name'] : null;
        var inputTextPlaceholder = (typeof Setting.inputText !== 'undefined') ? Setting.inputText[1]['placeholder'] : null;
        var mimeType = [Setting.mimeType];
        var accept = mimeType.join(', ');
        var maxSize = (typeof Setting.maxSize !== 'undefined') ? Setting.maxSize : 1024;
        var maxUploads = (typeof Setting.maxUploads !== 'undefined') ? Setting.maxUploads : 0;
        var i = 0;

        // Create start element UI		
        var divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'container');

        var divBody = document.createElement('div');
        divBody.setAttribute('class', 'body');

        var ul = document.createElement('ul');

        var divFooter = document.createElement('div');
        divFooter.setAttribute('class', 'footer');

        var linkAdd = document.createElement('a');
        var linkText = document.createTextNode(buttonAddText);
        linkAdd.appendChild(linkText);
        linkAdd.setAttribute('class', 'btn btn-primary');
        linkAdd.addEventListener('click', addElement.bind(this));

        // appendChild
        divBody.appendChild(ul);
        divContainer.appendChild(divBody);
        divFooter.appendChild(linkAdd);
        divContainer.appendChild(divFooter);
        container.appendChild(divContainer);

        // Add Element li
        function addElement() {

            if (checkMaxUpload()) {
                alert('Error:\nYou have exceeded the ' + maxUploads + ' allowable loads.');
                return;
            }

            i++;
            var li = document.createElement('li');
            li.setAttribute('id', 'item_' + i);

            var pDelete = document.createElement('p');
            pDelete.setAttribute('class', 'delete');

            var linkDelete = document.createElement('a');
            var linkDeleteTxt = document.createTextNode(linkDeleteText);
            linkDelete.appendChild(linkDeleteTxt);
            linkDelete.href = 'javascript:void(0)';
            linkDelete.setAttribute('class', 'delete text-primary');

            var divInputGroupFile = document.createElement('div');
            divInputGroupFile.setAttribute('class', 'input-file input-group');

            var inputText = document.createElement('input');
            inputText.setAttribute('type', 'text');
            inputText.setAttribute('disabled', 'true');
            inputText.setAttribute('class', 'form-control');

            var spanInputGroup = document.createElement('span');
            spanInputGroup.setAttribute('class', 'input-group-btn');

            var divBtn = document.createElement('div');
            divBtn.setAttribute('class', 'btn inputFileButton');

            var spanGlyphicon = document.createElement('span');
            spanGlyphicon.setAttribute('class', 'glyphicon glyphicon-folder-open');

            var spanTitle = document.createElement('span');
            spanTitleText = document.createTextNode(inputFileButtonText);
            spanTitle.appendChild(spanTitleText);

            var inputFile = document.createElement('input');
            inputFile.setAttribute('type', 'file');
            inputFile.setAttribute('name', inputFileName + '[]');
            inputFile.setAttribute('accept', accept);

            // appendChild
            pDelete.appendChild(linkDelete);

            divInputGroupFile.appendChild(inputText);


            divBtn.appendChild(spanGlyphicon);
            divBtn.appendChild(spanTitle);
            divBtn.appendChild(inputFile);
            spanInputGroup.appendChild(divBtn);
            divInputGroupFile.appendChild(spanInputGroup);

            li.appendChild(pDelete);
            li.appendChild(divInputGroupFile);

            ul.appendChild(li);

            // input change
            inputFile.addEventListener('change', changeFile.bind(this, li, inputFile, pDelete, divInputGroupFile));

            // linkDelete
            linkDelete.addEventListener('click', deleteItem.bind(this, li));
        }

        // Change file
        function changeFile(li, inputFile, pDelete, divInputGroupFile) {

            var id = li.getAttribute('id');
            var i = id.substring(id.length - 1, id.length);
            var idImagePreview = 'imagePreview_' + i;
            var file = inputFile.files[0];
            var image = document.createElement('img');

            if (checkFileSize(file)) {
                alert('Error:\nThe file exceeded ' + maxSize + ' Kb');
                return;
            }

            if (document.getElementById(idImagePreview) === null) {

                if (pDelete.parentNode !== null) {
                    pDelete.parentNode.removeChild(pDelete);
                }

                if (typeof inputTextName == 'string') {
                    divInputGroupFile.style.zIndex = -2;
                }

                var divImagePreview = document.createElement('div');
                divImagePreview.setAttribute('class', 'image-preview');
                divImagePreview.setAttribute('id', idImagePreview);
                image.src = window.URL.createObjectURL(file);

                var divMask = document.createElement('div');
                divMask.setAttribute('class', 'mask');

                var pImgName = document.createElement('p');
                var pImgNameText = document.createTextNode(file.name);
                pImgName.appendChild(pImgNameText);

                var divTools = document.createElement('div');
                divTools.setAttribute('class', 'tools');

                var linkDelete = document.createElement('a');
                linkDelete.href = 'javascript:void(0)';
                linkDelete.setAttribute('class', 'glyphicon glyphicon-remove');

                var linkChange = document.createElement('a');
                linkChange.href = 'javascript:void(0)';
                linkChange.setAttribute('class', 'glyphicon glyphicon-folder-open');

                if (typeof inputTextName !== 'object') {
                    var divInputGroupText = document.createElement('div');
                    divInputGroupText.setAttribute('class', 'input-text input-group');

                    var inputText = document.createElement('input');
                    inputText.setAttribute('type', 'text');
                    inputText.setAttribute('name', inputTextName + '[]');
                    inputText.setAttribute('placeholder', inputTextPlaceholder);
                    inputText.setAttribute('class', 'form-control');
                }

                // appendChild
                divImagePreview.appendChild(image);
                divMask.appendChild(pImgName);
                divTools.appendChild(linkChange);
                divTools.appendChild(linkDelete);
                divMask.appendChild(divTools);
                divImagePreview.appendChild(divMask);
                li.appendChild(divImagePreview);

                if (typeof inputTextName !== 'object') {
                    divInputGroupText.appendChild(inputText);
                    li.appendChild(divInputGroupText);
                }
                
                li.insertBefore(divImagePreview, divInputGroupFile);
                
                // Change item
                linkChange.addEventListener('click', clickInputFile.bind(this, inputFile));

                // linkDelete
                linkDelete.addEventListener('click', deleteItem.bind(this, li));

            } else {

                if (checkFileSize(file)) {
                    alert('Error:\nThe file exceeded ' + maxSize + ' Kb');
                    return;
                }

                // Delete old divImagePreview
                document.getElementById(idImagePreview).remove();

                // New divImagePreview
                var divImagePreview = document.createElement('div');
                divImagePreview.setAttribute('class', 'image-preview');
                divImagePreview.setAttribute('id', idImagePreview);

                image.src = window.URL.createObjectURL(file);

                var divMask = document.createElement('div');
                divMask.setAttribute('class', 'mask');

                var pImgName = document.createElement('p');
                var pImgNameText = document.createTextNode(file.name);
                pImgName.appendChild(pImgNameText);

                var divTools = document.createElement('div');
                divTools.setAttribute('class', 'tools');

                var linkDelete = document.createElement('a');
                linkDelete.href = 'javascript:void(0)';
                linkDelete.setAttribute('class', 'glyphicon glyphicon-remove');

                var linkChange = document.createElement('a');
                linkChange.href = 'javascript:void(0)';
                linkChange.setAttribute('class', 'glyphicon glyphicon-folder-open');

                // appendChild
                divImagePreview.appendChild(image);
                divTools.appendChild(linkChange);
                divTools.appendChild(linkDelete);
                divMask.appendChild(pImgName);
                divMask.appendChild(divTools);
                divImagePreview.appendChild(divMask);
                
                li.insertBefore(divImagePreview, divInputGroupFile);
                
                // Change item
                linkChange.addEventListener('click', clickInputFile.bind(this, inputFile));

                // linkDelete
                linkDelete.addEventListener('click', deleteItem.bind(this, li));
            }

        }


        // Check maxUpload
        function checkMaxUpload() {
            if (maxUploads !== 0) {
                var files = document.querySelectorAll("input[type=file]");
                if ((files.length + 1) > maxUploads) {
                    return true;
                }
            }
        }

        // Check file size
        function checkFileSize(file) {
            if (Math.ceil(file.size / 1024) > maxSize) {
                return true;
            }
        }

        // Change file
        function clickInputFile(inputFile) {
            inputFile.click();
        }

        // Delete item li
        function deleteItem(li) {
            li.parentNode.removeChild(li);
        }

    },
    init: function (Setting) {
        this.initPreUpload(Setting);
        return true;
    }
};
