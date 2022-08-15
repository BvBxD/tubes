let modal = document.getElementById("modalcoy");
let close = document.getElementById("close");
let formValues = document.getElementsByName("answe");

function modals(num) {
    let content = document.getElementById("content");
    let no = parseInt(num);
    switch (no) {
        case 1:
            //sign in
            content.innerHTML = signIn;
            modal.style.display = "block";
            break;
        case 2:
            // get started
            content.innerHTML = signUp;
            modal.style.display = "block";
            break;
        case 3:
            // submit
            content.innerHTML = submit;
            modal.style.display = "block";
            break;
    }
}

// pas pencet sembarang tempat (diluar modal/popup)
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

// --

let signUp = `
    <h2 style="text-align:center;">Ayoo Daftar</h2>
    <label for="fname">Name</label>
    <input
        type="text"
        id="fname"
        name="answe"
        placeholder="Your name.."
    />
    <label for="lname">Email</label>
    <input
        type="text"
        id="email"
        name="answe"
        placeholder="Your Email.."
    />
    <label for="subject">Password</label>
    <input
        type="password"
        id="subject"
        name="answe"
        placeholder="Passwordnya kak.."
    ></input>
    <label for="subject">Confirm Password</label>
    <input
        type="password"
        id="subject"
        name="answe"
        placeholder="Sekali lagi kak.."
    ></input>
    <label for="country">Negara</label>
    <select id="country" name="answe">
        <option value="Australia">Australia</option>
        <option value="Indonesia">Indonesia</option>
        <option value="Amrik">USA</option>
        <option value="Arab">Arabb</option>
        <option value="Turkey">Turkeyy</option>
    </select>
    <button class="btn btn-biru">
        Daftar!
    </button>
    `;
let signIn = `
    <h2 style="text-align:center;">Masuk Masuk</h2>
    <label for="lname">Email</label>
    <input
        type="text"
        id="email"
        name="answe"
        placeholder="Your Email.."
    />
    <label for="subject">Password</label>
    <input
        type="password"
        id="subject"
        name="answe"
        placeholder="Passwordnya kak.."
    ></input>
    <button class="btn btn-biru">
        Masuk!
    </button>`;

let submit = `
<table>
    <h2>Here is it what you input!</h2>
    <tr>
        <td><strong>Nama</strong></td>
        <td>:</td>
        <td> ${formValues[0].value}</td>
    </tr>
    <tr>
        <td><strong>Email</strong></td>
        <td>:</td>
        <td> ${formValues[1].value}</td>
    </tr>
    <tr>
        <td><strong>Negara</strong></td>
        <td>:</td>
        <td> ${formValues[2].value}</td>
    </tr>
    <tr>
        <td><strong>Pesan</strong></td>
        <td>:</td>
        <td> ${formValues[3].value}</td>
    </tr>
</table>`;
