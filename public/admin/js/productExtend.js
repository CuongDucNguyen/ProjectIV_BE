const route = 'products';
extendController = ($scope, $http) => {
    // $scope.name = '';
    // $scope.visible = true;
    $scope.fields = [
        {hidden: false, field: 'name', display: 'Tên sản phẩm', default: '', type: 'text'},
        {hidden: false, field: 'code', display: 'Mã', default: '', type: 'text'},
        {hidden: false, field: 'category.name', display: 'Tên loại', default: '', type: 'text', readonly : true},
        {hidden: false, field: 'quantity', display: 'Số lượng', default: '', type: 'text'},
        {hidden: false, field: 'default_image.file_path', display: 'Ảnh', default: '', type: 'file'},
        {hidden: false, field: 'visible', display: 'Hiển thị', default: true, type: 'checkbox'},
        {hidden: true, field: 'description', display: 'Mô tả', default: '', type: 'editor'},
        // {hidden: true, field: 'visible', display: 'Hiển thị', default: true, type:'checkbox'},
    ];
    $scope.id = 0;
    $scope.item = {};
    $scope.selectedCategory = {};

    for (let field of $scope.fields.filter(v => !v.readonly)) {
        $scope.item[field.field] = field.default;
    }

    $scope.showEdit = (item) => {
<<<<<<< HEAD
        document.getElementById('default_image.file_path').value = '';
=======
        const file = document.getElementById('default_image.file_path');
        if (file != null) file.value = '';
>>>>>>> d4b75824f1a38af2224f826d1dba8aa3d4941276
        $scope.id = item.id;
        $scope.selectedCategory = $scope.categories.find(v => v.id == item.category_id)??{};
        for (let field of $scope.fields.filter(v => !v.readonly)) {
            $scope.item[field.field] = item[field.field];
        }
        $scope.editting = true;
        editor.setData(item.description??'');
        $scope.formVisible = true;
        $scope.deleting = false;
    }

    $scope.showAddNew = () => {
        for (let field of $scope.fields.filter(v => !v.readonly)) {
            $scope.item[field.field] = field.default;
        }
<<<<<<< HEAD
        document.getElementById('default_image.file_path').value = '';
=======
        const file = document.getElementById('default_image.file_path');
        if (file != null) value = '';
>>>>>>> d4b75824f1a38af2224f826d1dba8aa3d4941276
        editor.setData('');
        $scope.editting = false;
        $scope.deleting = false;
    }
    $scope.save = () => {
<<<<<<< HEAD
        let file = document.getElementById('default_image.file_path').files[0];
=======
        const fileE = document.getElementById('default_image.file_path');
        let file;
        if (fileE != null) 
            file = fileE.files[0];
>>>>>>> d4b75824f1a38af2224f826d1dba8aa3d4941276
        let item = {};
        for (let field of $scope.fields.filter(v => !v.readonly)) {
            item[field.field] = $scope.item[field.field];
        }
<<<<<<< HEAD
        let index = document.getElementById('selectCate').selectedIndex;
        $scope.selectedCategory = $scope.categories[index];
        item.category_id = $scope.selectedCategory;
=======
        let index = document.getElementById('selectCate')?.selectedIndex??-1;
        if (index > 0)
            $scope.selectedCategory = $scope.categories[index];
        item.category_id = $scope.selectedCategory.id;
>>>>>>> d4b75824f1a38af2224f826d1dba8aa3d4941276
        if (file != undefined && file != null)
        {
            $scope.upLoadFile(file, '/api/upload')
                .then(res => {
                    if (res.data.status == true)
                    {
                        item.default_image = res.data.data.id;
                    }
                    item.description = editor.getData();
                    item.category_id = $scope.selectedCategory.id;
                    if ($scope.editting) {
                        $scope.update($scope.id, item);
                    } else if ($scope.deleting) {
                        $scope.delete($scope.id);
                    } else {
                        $scope.create(item)
                    }
                });
        }
        else
        {
            item.description = editor.getData();
            item.category_id = $scope.selectedCategory.id;
            if ($scope.editting) {
                $scope.update($scope.id, item);
            } else if ($scope.deleting) {
                $scope.delete($scope.id);
            } else {
                $scope.create(item)
            }
        }
    }
    $scope.showDelete = (id) => {
        $scope.id = id;
        $scope.deleting = true;
    }
    $scope.categories = [];
    $http.get('/api/admin/categories?page=1&limit=1000')
        .then(res => {
            if (res.data.status == true) {
                $scope.categories = res.data.data;
            }
        });
    $scope.change = () => {
        console.log($scope.file);
    }
}
