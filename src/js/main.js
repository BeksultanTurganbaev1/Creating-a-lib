import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

// $('.wrap').html(
//     `
//     <div class="dropdown">
//         <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//         <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//             <a href="#" class="dropdown-item">Action #1</a>
//             <a href="#" class="dropdown-item">Action #2</a>
//             <a href="#" class="dropdown-item">Action #3</a>
//         </div>
//     </div>
//     `
// );

// $('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore placeat atque quis pariatur
        ut deserunt reprehenderit natus, at explicabo hic culpa earum saepe ratione sed vel, voluptatum
        vitae cupiditate?`,
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close', 
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Dannye sohraneny');
                }
            ],
            [
                'Another button',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Hello world');
                }
            ]
        ]
    }
}));