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
    public class GestionProjectController : ApiController
    {

        private string allJson = "";

        

        


       


        [HttpGet]
        [Route("AddTachToSprint/{idSprint}/{titre}/{description}/{date_deb}/{datefin}/{idCons}")]
        public HttpResponseMessage AddTachToSprint(int idSprint, string titre, string description, DateTime date_deb, DateTime datefin,int idCons)
        {
            string res;
            string allJson = "[";

            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.AddTachToSprint(idSprint, titre, description, date_deb, datefin,idCons))
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
        [Route("ListeTachSprint/{IdSprint}")]
        public HttpResponseMessage ListeTachSprint(int IdSprint)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootTachSprint ListeTache = new RootTachSprint();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.ListeTachSprint(ref ListeTache, IdSprint);
                int i = 0;
                string id;
                string CodeSprint;
                string codeConsultant;
                string datecre;
                string titre;
                string desc;
                string datdeb;
                string datefin;
                string etat;


                string allJson = "[";
                int j = ListeTache.RecTacheSprint.Length;
                while (i < j)
                {
                    id = ListeTache.RecTacheSprint[i].id.ToString();
                    CodeSprint = ListeTache.RecTacheSprint[i].CodeSprint.ToString();
                    codeConsultant = ListeTache.RecTacheSprint[i].consultant.ToString();
                    titre = ListeTache.RecTacheSprint[i].titre.ToString();
                    desc = ListeTache.RecTacheSprint[i].desc.ToString();
                    datdeb = ListeTache.RecTacheSprint[i].datedeb.ToString();
                    datefin = ListeTache.RecTacheSprint[i].datefin.ToString();
                    datecre = ListeTache.RecTacheSprint[i].datecrea.ToString();
                    etat = ListeTache.RecTacheSprint[i].etat.ToString();


                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"CodeSprint\": " + "\"" + CodeSprint +
                         "\"," + "\"codeConsultant\": " + "\"" + codeConsultant +
                         "\"," + "\"titre\": " + "\"" + titre +
                         "\"," + "\"desc\": " + "\"" + desc +
                         "\"," + "\"datdeb\": " + "\"" + datdeb +
                         "\"," + "\"datefin\": " + "\"" + datefin +
                         "\"," + "\"datecre\": " + "\"" + datecre +
                         "\"," + "\"etat\": " + "\"" + etat +

                        "\"}";
                    if (i != j - 1)
                    {
                        allJson += ",";
                    }
                    i = i + 1;

                }
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



    }
}

