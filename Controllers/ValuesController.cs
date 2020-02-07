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
                services.Credentials = new System.Net.NetworkCredential("mhh", "Dynamix@2019", "DYS");
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
                services.Credentials = new System.Net.NetworkCredential("mhh", "Dynamix@2019", "DYS");
                //string text = services.ListeConsultant(); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.ListeConsultant(ref Consultant);
                int i = 0;
                string id;
                string nom;
                string prenom;
                string cin;
                string allJson = "[";
                int j = Consultant.RecCons.Length;
                while (i < j)
                {
                    nom = Consultant.RecCons[i].nom.ToString();
                    id = Consultant.RecCons[i].id.ToString();
                    prenom = Consultant.RecCons[i].prenom.ToString();
                    cin = Consultant.RecCons[i].cin.ToString();

                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"nom\": " + "\"" + nom +
                         "\"," + "\"prenom\": " + "\"" + prenom +
                         "\"," + "\"cin\": " + "\"" + cin +

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
                services.Credentials = new System.Net.NetworkCredential("mhh", "Dynamix@2019", "DYS");
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
        [Route("AddConsultant/{cin}/{nom}/{prenom}/{email}/{Role}")]
        public HttpResponseMessage AddConsultant(string cin,string nom,string prenom,string email,string Role)
        {
            Boolean res;

            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                //webService.RootAddCons Consultant = new RootAddCons();
                services.Credentials = new System.Net.NetworkCredential("mhh", "Dynamix@2019", "DYS");
                //string text = services.ListeConsultant(ref Consultant); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.AddConsultant(cin, nom, prenom,email,Role))
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
                services.Credentials = new System.Net.NetworkCredential("mhh", "Dynamix@2019", "DYS");
                //string text = services.ListeConsultant(); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.SelectConsu(ref Consultant ,id);
                int i = 0;
                string idc;
                string nom;
                string prenom;
                string cin;
                string allJson = "[";
               
                    nom = Consultant.RecCons[i].nom.ToString();
                    idc = Consultant.RecCons[i].id.ToString();
                    prenom = Consultant.RecCons[i].prenom.ToString();
                    cin = Consultant.RecCons[i].cin.ToString();

                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"nom\": " + "\"" + nom +
                         "\"," + "\"prenom\": " + "\"" + prenom +
                         "\"," + "\"cin\": " + "\"" + cin +

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
        [Route("UpdateConsu/{id}/{nom}/{prenom}")]
        public HttpResponseMessage UpdateConsu(int id , string nom ,string prenom)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootCons Consultant = new RootCons();
                services.Credentials = new System.Net.NetworkCredential("mhh", "Dynamix@2019", "DYS");
                //string text = services.ListeConsultant(); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.UpdateConsu(id,nom,prenom);
              
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

