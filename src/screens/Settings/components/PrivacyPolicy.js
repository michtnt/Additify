/* eslint-disable prettier/prettier */
import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { View, Container, Content, List, ListItem, Header, Left, Text, Body, Right, Accordion } from "native-base";
import Icon from "react-native-vector-icons/Feather";


class PrivacyPolicy extends PureComponent {
    render(){
        return(
            <Container>
            <Header style={styles.header}>
                <Left><Icon name="arrow-left" style={styles.icon} onPress={() => {this.props.navigation.goBack()}}/></Left>
            </Header>
            <Content>
                <Text style={styles.title}>PRIVACY NOTICE</Text>
                <Text style={{...styles.text, marginBottom: 20, fontWeight: "bold"}}>Last updated August 05, 2020</Text>
                <Text style={styles.text}>Thank you for choosing to be part of our community at Michelle Tanoto (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at michelletanotoo@gmail.com.</Text>
                <Text style={styles.text}>When you use our mobile application, as the case may be (the "App") and more generally, use any of our services (the "Services", which include the App), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</Text>
                <Text style={{...styles.text, fontWeight: "bold"}}>Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</Text>
                <Text style={styles.subtitle}>TABLE OF CONTENTS</Text>

                <Text style={{...styles.text, marginTop: 20}}>1. WHAT INFORMATION DO WE COLLECT?</Text>
                <Text style={styles.text}>2. HOW DO WE USE YOUR INFORMATION?</Text>
                <Text style={styles.text}>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</Text>
                <Text style={styles.text}>4. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</Text>
                <Text style={styles.text}>5. HOW LONG DO WE KEEP YOUR INFORMATION?</Text>
                <Text style={styles.text}>6. WHAT ARE YOUR PRIVACY RIGHTS?</Text>
                <Text style={styles.text}>7. CONTROLS FOR DO-NOT-TRACK FEATURES</Text>
                <Text style={styles.text}>8. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Text>
                <Text style={styles.text}>9. DO WE MAKE UPDATES TO THIS NOTICE?</Text>
                <Text style={styles.text}>10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Text>

                <Text style={styles.subsubtitle}>1. WHAT INFORMATION DO WE COLLECT?</Text>
                <Text style={styles.subtext}>Information collected through our App</Text>
                <Text style={{...styles.text, marginTop: 10, fontStyle: "italic"}}>In Short:  We collect information regarding your mobile device, when you use our App.</Text>
                <Text style={styles.text}>If you use our App, we also collect the following information:</Text>
                <Text style={styles.bullets}>Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's camera, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</Text>
                <Text style={styles.text}>The information is primarily needed to maintain the security and operation of our App, for troubleshooting and for our internal analytics and reporting purposes.</Text>

                <Text style={styles.subsubtitle}>2. HOW DO WE USE YOUR INFORMATION?</Text>
                <Text style={{...styles.text, marginTop: 10, fontStyle: "italic"}}>In Short:  We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</Text>
                <Text style={styles.text}>We use personal information collected via our App for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.</Text>
                <Text style={styles.text}>We use the information we collect or receive:</Text>
                <Text style={styles.bullets}>Fulfill and manage your orders. We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the App.</Text>
                <Text style={styles.bullets}>Administer prize draws and competitions. We may use your information to administer prize draws and competitions when you elect to participate in our competitions.</Text>
                <Text style={styles.bullets}>To deliver and facilitate delivery of services to the user. We may use your information to provide you with the requested service.</Text>
                <Text style={styles.bullets}>To respond to user inquiries/offer support to users. We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</Text>

                <Text style={styles.subsubtitle}>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</Text>
                <Text style={{...styles.text, marginTop: 10, fontStyle: "italic"}}>In Short:  We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</Text>
                <Text style={styles.text}>We may process or share your data that we hold based on the following legal basis:</Text>
                <Text style={styles.bullets}>Consent: We may process your data if you have given us specific consent to use your personal information in a specific purpose.</Text>
                <Text style={styles.bullets}>Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.</Text>
                <Text style={styles.bullets}>Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</Text>
                <Text style={styles.bullets}>Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</Text>
                <Text style={styles.bullets}>Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</Text>
                <Text style={styles.text}>More specifically, we may need to process your data or share your personal information in the following situations:</Text>
                <Text style={styles.bullets}>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</Text>

                <Text style={styles.subsubtitle}>4. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</Text>
                <Text style={{...styles.text, marginTop: 10, fontStyle: "italic"}}>In Short:  We may transfer, store, and process your information in countries other than your own.</Text>
                <Text style={styles.text}>Our servers are located in. If you are accessing our App from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "WILL YOUR INFORMATION BE SHARED WITH ANYONE?" above), in and other countries.</Text>
                <Text style={styles.text}>If you are a resident in the European Economic Area, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.</Text>

                <Text style={styles.subsubtitle}>5. HOW LONG DO WE KEEP YOUR INFORMATION?</Text>
                <Text style={{...styles.text, marginTop: 10, fontStyle: "italic"}}>In Short:  We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</Text>
                <Text style={styles.text}>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 90 days.</Text>
                <Text style={styles.text}>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</Text>

                <Text style={styles.subsubtitle}>6. WHAT ARE YOUR PRIVACY RIGHTS?</Text>
                <Text style={{...styles.text, marginTop: 10, fontStyle: "italic"}}>In Short:  You may review, change, or terminate your account at any time.</Text>
                <Text style={styles.text}>If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</Text>
                <Text style={styles.text}>If you are resident in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.</Text>

                <Text style={styles.subsubtitle}>7. CONTROLS FOR DO-NOT-TRACK FEATURES</Text>
                <Text style={styles.text}>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</Text>

                <Text style={styles.subsubtitle}>8. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Text>
                <Text style={{...styles.text, marginTop: 10, fontStyle: "italic"}}>In Short:  Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</Text>
                <Text style={styles.text}>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</Text>
                <Text style={styles.text}>If you are under 18 years of age, reside in California, and have a registered account with the App, you have the right to request removal of unwanted data that you publicly post on the App. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the App, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).</Text>

                <Text style={styles.subsubtitle}>9. DO WE MAKE UPDATES TO THIS NOTICE?</Text>
                <Text style={{...styles.text, marginTop: 10, fontStyle: "italic"}}>In Short:  Yes, we will update this notice as necessary to stay compliant with relevant laws.</Text>
                <Text style={styles.text}>We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</Text>

                <Text style={styles.subsubtitle}>10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Text>
                <Text style={{...styles.text, marginTop: 10 }}>If you have questions or comments about this notice, you may email us at michelletanotoo@gmail.com.</Text>

                <Text style={styles.subsubtitle}>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Text>
                <Text style={styles.text}>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking here. We will respond to your request within 30 days.</Text>

            </Content>
           </Container>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        borderBottomWidth: 0
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 25
    },
    subtitle: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
    },
    subsubtitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
    },
    bullets: {
        marginLeft: 40,
        marginTop: 5,
        marginRight: 25,
        textAlign: "justify",
        marginBottom: 10,
    },
    text: {
        marginLeft: 25,
        marginTop: 5,
        marginRight: 25,
        textAlign: "justify",
        marginBottom: 10,
    },
    subtext:{
        marginLeft: 25,
        marginTop: 5,
        marginRight: 25,
        textAlign: "justify",
        fontWeight: "bold"
    },
    icon:{
      fontSize: 30,
      marginLeft: 15,
      // marginTop: 10
    }
})

export default PrivacyPolicy;

