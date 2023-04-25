$("#search-finished-package").on("submit", function (event) {
    var initialDate = $("#initialDate").val();
    var finalDate = $("#finalDate").val();

    event.preventDefault();
    var url = 'http://localhost:8080/packages/get-finished?initialDate=' + initialDate + '&finalDate=' + finalDate;

    const requestSerch = $.ajax({
        type: "GET",
        url: url,
        dataType: "json"
    });
    requestSerch.done(response => {
        line = '';
        $(response).each(i => {
            info = response[i];
            line += `<tr scope="row" class="clickable-row" data-href="detalhes-pacote-fechado.html?id=${info.id_package}">
                    <td>${info.id_package}</td>
                    <td>${info.title_package}</td>
                    <td>${info.destiny_package}</td>
                </tr>`;
        });
        $("#t-body").html(line);


        $(".clickable-row").click(function() {
            $('#openModal').modal('show');
            var lineDetails = '';
            lineDetails+=`<p>Título: ${info.title_package}</p>
                <p>Tamanho do pacote: ${info.size_group_package}</p>
                <p>Preço do pacote: R$ ${info.price_package}</p>
                <p>Data de início da viagem: ${info.init_date_travel_package}</p>
                <p>Data de fim da viagem: ${info.final_date_travel_package}</p>
                <p>Destino da viagem: ${info.destiny_package}</p>
                <p>Descrição do pacote: ${info.description_package}</p>
            `
            $("#detail-package").html(lineDetails);           
        });


    });
});

