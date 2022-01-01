import withModel from "../main";
const model = require("wink-eng-lite-model");

const summarize = withModel(model);

const battery =  `A battery is a source of electric power consisting of one or more electrochemical cells with external connections[1] for powering electrical devices such as flashlights, mobile phones, and electric cars. When a battery is supplying electric power, its positive terminal is the cathode and its negative terminal is the anode.[2] The terminal marked negative is the source of electrons that will flow through an external electric circuit to the positive terminal. When a battery is connected to an external electric load, a redox reaction converts high-energy reactants to lower-energy products, and the free-energy difference is delivered to the external circuit as electrical energy.[3] Historically the term "battery" specifically referred to a device composed of multiple cells, however the usage has evolved to include devices composed of a single cell.[4]\nPrimary (single-use or "disposable") batteries are used once and discarded, as the electrode materials are irreversibly changed during discharge; a common example is the alkaline battery used for flashlights and a multitude of portable electronic devices. Secondary (rechargeable) batteries can be discharged and recharged multiple times using an applied electric current; the original composition of the electrodes can be restored by reverse current. Examples include the lead-acid batteries used in vehicles and lithium-ion batteries used for portable electronics such as laptops and mobile phones.\nBatteries come in many shapes and sizes, from miniature cells used to power hearing aids and wristwatches to small, thin cells used in smartphones, to large lead acid batteries or lithium-ion batteries in vehicles, and at the largest extreme, huge battery banks the size of rooms that provide standby or emergency power for telephone exchanges and computer data centers.\nBatteries have much lower specific energy (energy per unit mass) than common fuels such as gasoline. In automobiles, this is somewhat offset by the higher efficiency of electric motors in converting electrical energy to mechanical work, compared to combustion engines.`;

const summary = summarize(battery);
console.log(summary.slice(0, 3).join(" "));