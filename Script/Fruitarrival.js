var OperatorSource = [{ operatorId: 1, operatorName: "operator1" },
                      { operatorId: 2, operatorName: "operator2" },
                      { operatorId: 3, operatorName: "operator3" },
                      { operatorId: 4, operatorName: "operator4" },
];
var FruitarrivallayoutModel = kendo.observable({
    HarvestDetails: function (e) {
        var harvestView = new kendo.View("Harvest-temp");
        AssetLayout.showIn("#content", harvestView);

    },
    AdditiveDetails: function (e) {
        var additiveView = new kendo.View("Additive-temp");
        AssetLayout.showIn("#content", additiveView);
      
      
    },
    NewBin: function (e) {
        AssetLayout.showIn("#content", FruitarrivalContentView);
    },
});
var AssetLayout = new kendo.Layout("Layout-temp", { model: FruitarrivallayoutModel });

var FruitarrivalContentModel = kendo.observable({
    OperatorSource: OperatorSource
});
var FruitarrivalContentView = new kendo.View("content-temp", { model: FruitarrivalContentModel });

$(document).ready(function () {
    $("[data-toggle=popover]")
   .popover()

    $(':not(#anything)').on('click', function (e) {
        $('[data-toggle=popover]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
                return;
            }
        });
    });
    var router = new kendo.Router({
        init: function () {
            AssetLayout.render("#Main");
            AssetLayout.showIn("#content", FruitarrivalContentView);
        }
    });
    $(function () {
        router.start();
    });

   
});

