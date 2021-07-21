import smartpy as sp

FA2 = sp.io.import_template("FA2.py")
class Cyber_Token(FA2.FA2):
    pass

@sp.add_test(name = "Fungible Token")
def test():
    scenario = sp.test_scenario()
    admin = sp.address("tz1gmWZZHSTKQPX9EdPBCfjZVj2uTPKt5vYe")

    cyber_token = Cyber_Token(FA2.FA2_config(single_asset=True), admin = admin, metadata = sp.big_map({
    "": sp.utils.bytes_of_string("tezos-storage:content"),
    "content": sp.utils.bytes_of_string("""{"name" : "Cyber Token"}""")}))
    scenario += cyber_token
    