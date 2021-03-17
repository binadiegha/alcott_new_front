let dTable = $('#d-table');

data.forEach(element => {
    // main.appendChild(`<b>come</b>`);
    const htmlcontent = `
        <tr class="ntxt">
        <td class="ini">${ element.icon === 'import' ? '<span class="mdi mdi-arrow-bottom-right red"></span>' : '<span class="mdi mdi-arrow-top-right green"></span>' }</td>
        <td> ${ element.sn }</td>
        <td>${ element.id }</td>
        <td>${ element.shipment_type }</td>
        <td> ${ element.pickup }</td>
        <td> ${ element.dropoff } </td>
        <td> ${ element.status } </td>
        <td class="tblast"> ${ element.date } </td>
        </tr>
    `;

    // main.append(htmlcontent);
    $('#d-table').append(htmlcontent);

    


});