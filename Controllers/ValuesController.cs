using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Http.Headers;
using System.Web.Cors;
using System.Web.Http.Cors;


using DPM_Api_VBETA.webService;
namespace DPM_Api_VBETA.Controllers
{
    [RoutePrefix("api/DPM")]
    public class ValuesController : ApiController
    {

        private string allJson = "";

        [HttpGet]
        [Route("ListeClient/")]
        public HttpResponseMessage ListeClient()
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.Root Client = new Root();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.ListeClient(ref Client);
                int i = 0;
                string no;
                string name;
                string adresse;
                string phone;
                string lastdatemode;
                string allJson = "[";
                int j=Client.RecG18.Length;
                while (i < Client.RecG18.Length)
                {
                    name = Client.RecG18[i].Name.ToString();
                    no = Client.RecG18[i].No.ToString();
                    adresse = Client.RecG18[i].Adresse.ToString();
                    phone = Client.RecG18[i].Phone.ToString();
                    lastdatemode = Client.RecG18[i].LastDateMod.ToString();
                    allJson += "{ \"no\": " + "\"" + no +
                         "\"," + "\"name\": " + "\"" + name +
                         "\"," + "\"adresse\": " + "\"" + adresse +
                         "\"," + "\"phone\": " + "\"" + phone +
                         "\"," + "\"lastdatemode\": " + "\"" + phone +

                        "\"}";
                    if (i != j - 1)
                    {
                        allJson += ",";
                    }
                    i = i+1;

                }
                allJson += " ]";
                response.Content = new StringContent(allJson);
                //responce.Content= new str
                return response;
            }
            catch(Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }

        [HttpGet]
        [Route("ListeConsultant/")]
        public HttpResponseMessage ListeConsultant()
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootCons Consultant = new RootCons();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.ListeConsultant(ref Consultant);
                int i = 0;
                string id;
                string nom;
                string prenom;
                string cin;
                string role;
                string email;
                string tele;
                string tele2;
                string image;
                string curc;
                string titre;
                string datenais;
                string datecont;
                string allJson = "[";
                int j = Consultant.RecCons.Length;
                while (i < j)
                {
                    nom = Consultant.RecCons[i].nom.ToString();
                    id = Consultant.RecCons[i].id.ToString();
                    prenom = Consultant.RecCons[i].prenom.ToString();
                    cin = Consultant.RecCons[i].cin.ToString();
                    role = Consultant.RecCons[i].Role.ToString();
                    email = Consultant.RecCons[i].email.ToString();
                    tele = Consultant.RecCons[i].telephone.ToString();
                    tele2 = Consultant.RecCons[i].telephoneurg.ToString();
                    titre = Consultant.RecCons[i].titre.ToString();
                    curc = Consultant.RecCons[i].cur_vit.ToString();
                    image = Consultant.RecCons[i].cur_vit.ToString();
                    datenais = Consultant.RecCons[i].datenais.ToString();
                    datecont = Consultant.RecCons[i].datedeb.ToString();

                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"nom\": " + "\"" + nom +
                         "\"," + "\"prenom\": " + "\"" + prenom +
                         "\"," + "\"cin\": " + "\"" + cin +
                         "\"," + "\"role\": " + "\"" + role +
                         "\"," + "\"email\": " + "\"" + email +
                         "\"," + "\"tele\": " + "\"" + tele +
                         "\"," + "\"tele2\": " + "\"" + tele2 +
                         "\"," + "\"titre\": " + "\"" + titre +
                         "\"," + "\"curc\": " + "\"" + curc +
                         "\"," + "\"image\": " + "\"" + image +
                         "\"," + "\"datenais\": " + "\"" + datenais +
                         "\"," + "\"datecont\": " + "\"" + datecont +

                        "\"}";
                    if (i != j - 1)
                    {
                        allJson += ",";
                    }
                    i = i + 1;

                }
                allJson += " ]";
                response.Content = new StringContent(allJson);
                //responce.Content= new str
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }




        [HttpGet]
        [Route("DeleteConsultant/{id}")]
        public HttpResponseMessage DeleteConsultant(int id)
        {          
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootCons Consultant = new RootCons();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(ref Consultant); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.DeleteConsultant(ref id);
           
                response.Content = new StringContent(allJson);
                //responce.Content= new str
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }


        [HttpGet]
        [Route("AddConsultant/{cin}/{nom}/{prenom}/{naissance}/{email}/{Role}/{tele}/{tele_urg}/{titre}/{date_deb}")]
        public HttpResponseMessage AddConsultant(string cin,string nom,string prenom, DateTime naissance, string email,string Role, string tele, string tele_urg, string titre, DateTime date_deb)
        {
            Boolean res;

            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                //webService.RootAddCons Consultant = new RootAddCons();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(ref Consultant); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.AddConsultant(cin, nom, prenom, naissance,email,Role,tele,tele_urg,titre,date_deb))

                {  res = true; }
                else { res = false; }
                response.Content = new StringContent(res.ToString());
                //responce.Content= new str
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }


        [HttpGet]
        [Route("SelectConsu/{id}")]
        public HttpResponseMessage SelectConsu(int id)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootCons Consultant = new RootCons();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.SelectConsu(ref Consultant ,id);
                int i = 0;
                string idc;
                string nom;
                string prenom;
                string cin;
                string role;
                string email;
                string tele;
                string tele2;
                string image;
                string curc;
                string titre;
                string datenais;
                string datecont;
                string allJson = "[";
               
                    nom = Consultant.RecCons[i].nom.ToString();
                    idc = Consultant.RecCons[i].id.ToString();
                    prenom = Consultant.RecCons[i].prenom.ToString();
                    cin = Consultant.RecCons[i].cin.ToString();
                    role = Consultant.RecCons[i].Role.ToString();
                    email = Consultant.RecCons[i].email.ToString();
                    tele = Consultant.RecCons[i].telephone.ToString();
                    tele2 = Consultant.RecCons[i].telephoneurg.ToString();
                    titre = Consultant.RecCons[i].titre.ToString();
                    curc = Consultant.RecCons[i].cur_vit.ToString();
                    image = Consultant.RecCons[i].cur_vit.ToString();
                    datenais = Consultant.RecCons[i].datenais.ToString();
                    datecont = Consultant.RecCons[i].datedeb.ToString();
                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"nom\": " + "\"" + nom +
                         "\"," + "\"prenom\": " + "\"" + prenom +
                         "\"," + "\"cin\": " + "\"" + cin +
                          "\"," + "\"role\": " + "\"" + role +
                         "\"," + "\"email\": " + "\"" + email +
                         "\"," + "\"tele\": " + "\"" + tele +
                         "\"," + "\"tele2\": " + "\"" + tele2 +
                         "\"," + "\"titre\": " + "\"" + titre +
                         "\"," + "\"curc\": " + "\"" + curc +
                         "\"," + "\"image\": " + "\"" + image +
                         "\"," + "\"datenais\": " + "\"" + datenais +
                         "\"," + "\"datecont\": " + "\"" + datecont +

                        "\"}";
                   
                
                allJson += " ]";
                response.Content = new StringContent(allJson);
                //responce.Content= new str
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }




        [HttpGet]
        [Route("UpdateConsu/{id}/{nom}/{prenom}/{tele}/{teleurg}/{titre}/{role}")]
        public HttpResponseMessage UpdateConsu(int id , string nom ,string prenom,string tele , string teleurg ,string titre, string role)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootCons Consultant = new RootCons();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.UpdateConsu(id,nom,prenom,tele,teleurg,titre,titre);
              
                response.Content = new StringContent(allJson);
                //responce.Content= new str
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }


        [HttpGet]
        [Route("UpdateCv/{id}/{path}")]
        public HttpResponseMessage UpdateCv(int id, string path)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootCons Consultant = new RootCons();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.UpdateCv(id, path);

                response.Content = new StringContent(allJson);
                //responce.Content= new str
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }













        [HttpGet]
        [Route("AddPres/{cin}/{date}/{status}")]
        public HttpResponseMessage AddPres(string cin, DateTime date, string status )
        {
            string res;

            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                //webService.RootAddCons Consultant = new RootAddCons();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(ref Consultant); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.AddPres(cin, date, status))

                { res = "true"; }
                else { res = "false"; }

                allJson += "{ \"res\": " + "\"" + res +
                        "\"}";

                allJson += " ]";
                response.Content = new StringContent(allJson);
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }











        [HttpGet]
        [Route("ListeConsultantPresence/")]
        public HttpResponseMessage ListeConsultantPresence()
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootCons Consultant = new RootCons();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.ListeConsultantPresence(ref Consultant);
                int i = 0;
                string id;
                string nom;
                string prenom;
                string cin;
                string role;
                string email;
                string tele;
                string tele2;
                string image;
                string curc;
                string titre;
                string datenais;
                string datecont;
                string derdate;
                string pres;
                string allJson = "[";
                int j = Consultant.RecCons.Length;
                while (i < j)
                {
                    nom = Consultant.RecCons[i].nom.ToString();
                    id = Consultant.RecCons[i].id.ToString();
                    prenom = Consultant.RecCons[i].prenom.ToString();
                    cin = Consultant.RecCons[i].cin.ToString();
                    role = Consultant.RecCons[i].Role.ToString();
                    email = Consultant.RecCons[i].email.ToString();
                    tele = Consultant.RecCons[i].telephone.ToString();
                    tele2 = Consultant.RecCons[i].telephoneurg.ToString();
                    titre = Consultant.RecCons[i].titre.ToString();
                    curc = Consultant.RecCons[i].cur_vit.ToString();
                    image = Consultant.RecCons[i].cur_vit.ToString();
                    datenais = Consultant.RecCons[i].datenais.ToString();
                    datecont = Consultant.RecCons[i].datedeb.ToString();
                    derdate = Consultant.RecCons[i].derdat.ToString();
                    pres = Consultant.RecCons[i].presence.ToString();

                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"nom\": " + "\"" + nom +
                         "\"," + "\"prenom\": " + "\"" + prenom +
                         "\"," + "\"cin\": " + "\"" + cin +
                         "\"," + "\"role\": " + "\"" + role +
                         "\"," + "\"email\": " + "\"" + email +
                         "\"," + "\"tele\": " + "\"" + tele +
                         "\"," + "\"tele2\": " + "\"" + tele2 +
                         "\"," + "\"titre\": " + "\"" + titre +
                         "\"," + "\"curc\": " + "\"" + curc +
                         "\"," + "\"image\": " + "\"" + image +
                         "\"," + "\"datenais\": " + "\"" + datenais +
                         "\"," + "\"datecont\": " + "\"" + datecont +
                         "\"," + "\"derdate\": " + "\"" + derdate +
                         "\"," + "\"pres\": " + "\"" + pres +

                        "\"}";
                    if (i != j - 1)
                    {
                        allJson += ",";
                    }
                    i = i + 1;

                }
                allJson += " ]";
                response.Content = new StringContent(allJson);
                //responce.Content= new str
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }







        [HttpGet]
        [Route("AddConge/{nom}/{motif}/{datedeb}/{datefin}/{nbjours}/{type}/{status}/{cin}")]
        public HttpResponseMessage AddPres(string nom, string motif, DateTime datedeb, DateTime datefin,int nbjours,string type,string status,string cin)
        {
            string res;
            string allJson = "[";
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.AddConge(nom, motif, datedeb, datefin, nbjours, type, status,cin))

                { res = "true"; }
                else { res = "false"; }

                allJson += "{ \"res\": " + "\"" + res +
                        "\"}";

                allJson += " ]";
                response.Content = new StringContent(allJson);
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }


        [HttpGet]
        [Route("AddAuto/{cin}/{nom}/{date}/{heuredu}/{heureau}/{type}/{status}")]
        public HttpResponseMessage AddAuto(string cin, string nom, DateTime date, string heuredu, string heureau, string type,string status)
        {
            string res;
            string allJson = "[";
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.AddAuto(cin, nom, date, heuredu, heureau,type,status))

                { res = "true"; }
                else { res = "false"; }

                allJson += "{ \"res\": " + "\"" + res +
                        "\"}";

                allJson += " ]";
                response.Content = new StringContent(allJson);
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }


        [HttpGet]
        [Route("ListeConge/")]
        public HttpResponseMessage ListeConge()
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootCong Conge = new RootCong();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.ListeConge(ref Conge);
                int i = 0;
                string id;
                string nom;
                string motif;
                string datedeb;
                string datefin;
                string nbjours;
                string type;
                string status;
                string heuredeb;
                string heurefin;
            
                string allJson = "[";
                int j = Conge.RecCong.Length;
                while (i < j)
                {
                    id = Conge.RecCong[i].id.ToString();
                    nom = Conge.RecCong[i].nom.ToString();
                    motif = Conge.RecCong[i].motif.ToString();
                    datedeb = Conge.RecCong[i].datedeb.ToString();
                    datefin = Conge.RecCong[i].datefin.ToString();
                    nbjours = Conge.RecCong[i].nbjour.ToString();
                    type = Conge.RecCong[i].type.ToString();
                    status = Conge.RecCong[i].status.ToString();
                    heuredeb = Conge.RecCong[i].heuredeb.ToString();
                    heurefin = Conge.RecCong[i].heurefin.ToString();


                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"nom\": " + "\"" + nom +
                         "\"," + "\"motif\": " + "\"" + motif +
                         "\"," + "\"datedeb\": " + "\"" + datedeb +
                         "\"," + "\"datefin\": " + "\"" + datefin +
                         "\"," + "\"nbjours\": " + "\"" + nbjours +
                         "\"," + "\"type\": " + "\"" + type +
                         "\"," + "\"status\": " + "\"" + status +
                         "\"," + "\"heuredeb\": " + "\"" + heuredeb +
                         "\"," + "\"heurefin\": " + "\"" + heurefin +
                         "\"}";
                    if (i != j - 1)
                    {
                        allJson += ",";
                    }
                    i = i + 1;

                }
                allJson += " ]";
                response.Content = new StringContent(allJson);
                //responce.Content= new str
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }

        [HttpGet]
        [Route("Mesconges/{cin}")]
        public HttpResponseMessage Mesconges(string cin)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootCong Conge = new RootCong();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.Mesconges(ref Conge , cin);
                int i = 0;
                string id;
                string nom;
                string motif;
                string datedeb;
                string datefin;
                string nbjours;
                string type;
                string status;
                string heuredeb;
                string heurefin;

                string allJson = "[";
                int j = Conge.RecCong.Length;
                while (i < j)
                {
                    id = Conge.RecCong[i].id.ToString();
                    nom = Conge.RecCong[i].nom.ToString();
                    motif = Conge.RecCong[i].motif.ToString();
                    datedeb = Conge.RecCong[i].datedeb.ToString();
                    datefin = Conge.RecCong[i].datefin.ToString();
                    nbjours = Conge.RecCong[i].nbjour.ToString();
                    type = Conge.RecCong[i].type.ToString();
                    status = Conge.RecCong[i].status.ToString();
                    heuredeb = Conge.RecCong[i].heuredeb.ToString();
                    heurefin = Conge.RecCong[i].heurefin.ToString();


                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"nom\": " + "\"" + nom +
                         "\"," + "\"motif\": " + "\"" + motif +
                         "\"," + "\"datedeb\": " + "\"" + datedeb +
                         "\"," + "\"datefin\": " + "\"" + datefin +
                         "\"," + "\"nbjours\": " + "\"" + nbjours +
                         "\"," + "\"type\": " + "\"" + type +
                         "\"," + "\"status\": " + "\"" + status +
                         "\"," + "\"heuredeb\": " + "\"" + heuredeb +
                         "\"," + "\"heurefin\": " + "\"" + heurefin +
                         "\"}";
                    if (i != j - 1)
                    {
                        allJson += ",";
                    }
                    i = i + 1;

                }
                allJson += " ]";
                response.Content = new StringContent(allJson);
                //responce.Content= new str
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }


        [HttpGet]
        [Route("RepCong/{id}/{status}")]
        public HttpResponseMessage RepCong(int id, string status)
        {
            string res;
            string allJson = "[";


            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.RepCong(id, status))
                { res = "true"; }
                else { res = "false"; }

                allJson += "{ \"res\": " + "\"" + res +
                        "\"}";

                allJson += " ]";
                response.Content = new StringContent(allJson);
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }




        [HttpGet]
        [Route("GetConsultant/{email}/{num}")]
        public HttpResponseMessage GetConsultant(string email,string num)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootCons Consultant = new RootCons();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                
                services.GetConsultant(ref Consultant , email);
                int i = 0;
                string id;
                string nom;
                string prenom;
                string cin;
                string role;
                string mail;
                string tele;
                string tele2;
                string image;
                string curc;
                string titre;
                string datenais;
                string datecont;
                string allJson = "[";
                int j = Consultant.RecCons.Length;
                while (i < j)
                {
                    nom = Consultant.RecCons[i].nom.ToString();
                    id = Consultant.RecCons[i].id.ToString();
                    prenom = Consultant.RecCons[i].prenom.ToString();
                    cin = Consultant.RecCons[i].cin.ToString();
                    role = Consultant.RecCons[i].Role.ToString();
                    mail = Consultant.RecCons[i].email.ToString();
                    tele = Consultant.RecCons[i].telephone.ToString();
                    tele2 = Consultant.RecCons[i].telephoneurg.ToString();
                    titre = Consultant.RecCons[i].titre.ToString();
                    curc = Consultant.RecCons[i].cur_vit.ToString();
                    image = Consultant.RecCons[i].cur_vit.ToString();
                    datenais = Consultant.RecCons[i].datenais.ToString();
                    datecont = Consultant.RecCons[i].datedeb.ToString();

                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"nom\": " + "\"" + nom +
                         "\"," + "\"prenom\": " + "\"" + prenom +
                         "\"," + "\"cin\": " + "\"" + cin +
                         "\"," + "\"role\": " + "\"" + role +
                         "\"," + "\"email\": " + "\"" + mail +
                         "\"," + "\"tele\": " + "\"" + tele +
                         "\"," + "\"tele2\": " + "\"" + tele2 +
                         "\"," + "\"titre\": " + "\"" + titre +
                         "\"," + "\"curc\": " + "\"" + curc +
                         "\"," + "\"image\": " + "\"" + image +
                         "\"," + "\"datenais\": " + "\"" + datenais +
                         "\"," + "\"datecont\": " + "\"" + datecont +

                        "\"}";
                    if (i != j - 1)
                    {
                        allJson += ",";
                    }
                    i = i + 1;

                }
                allJson += " ]";
                response.Content = new StringContent(allJson);
                //responce.Content= new str
                return response;
            }
            catch (Exception e)
            {
                var responce = new HttpResponseMessage(HttpStatusCode.OK);
                responce.Content = new StringContent("{'Error machekell':'" + e.Message.Replace('\'', '"') + "'}");
                return responce;
            }
        }



    }
}

