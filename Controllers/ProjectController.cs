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
    public class ProjectController : ApiController
    {

        private string allJson = "";

        

        [HttpGet]
        [Route("ListeProject/")]
        public HttpResponseMessage ListeProject()
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootProject Project = new RootProject();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.ListeProject(ref Project);
                int i = 0;
                string id;
                string titre;
                string description;
                string datecre;
                string datdeb;
                string datefin;

                string allJson = "[";
                int j = Project.RecProject.Length;
                while (i < j)
                {
                    id = Project.RecProject[i].id.ToString();
                    titre = Project.RecProject[i].titre.ToString();
                    description = Project.RecProject[i].description.ToString();
                    datecre = Project.RecProject[i].datecreation.ToString();
                    datdeb = Project.RecProject[i].datedebut.ToString();
                    datefin = Project.RecProject[i].datefin.ToString();


                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"nom\": " + "\"" + titre +
                         "\"," + "\"description\": " + "\"" + description +
                         "\"," + "\"datecre\": " + "\"" + datecre +
                         "\"," + "\"datdeb\": " + "\"" + datdeb +
                         "\"," + "\"datefin\": " + "\"" + datefin +


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
        [Route("AddProject/{titre}/{description}/{datecreation}/{date_deb}/{datefin}")]
        public HttpResponseMessage AddProject(string titre,string description,DateTime datecreation, DateTime date_deb,DateTime datefin)
        {
            string res;
            string allJson = "[";

            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.AddProject(titre,description,datecreation,date_deb,datefin))
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
        [Route("AddBesoin/{titre}/{description}/{datecreation}/{codeproject}")]
        public HttpResponseMessage AddBesoin(string titre, string description, DateTime datecreation,int codeproject)
        {
            string res;
            string allJson = "[";

            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                //webService.RootAddCons Consultant = new RootAddCons();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(ref Consultant); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.AddBesoin(titre, description, datecreation,codeproject))
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
        [Route("ListeBesoin/{idproject}")]
        public HttpResponseMessage ListeBesoin(int idproject)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootBesoin Besoin = new RootBesoin();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.ListeBesoin(ref Besoin, idproject);
                int i = 0;
                string id;
                string titre;
                string description;
                string datecre;
               

                string allJson = "[";
                int j = Besoin.RecBesoin.Length;
                while (i < j)
                {
                    id = Besoin.RecBesoin[i].id.ToString();
                    titre = Besoin.RecBesoin[i].titre.ToString();
                    description = Besoin.RecBesoin[i].description.ToString();
                    datecre = Besoin.RecBesoin[i].datecreation.ToString();

                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"nom\": " + "\"" + titre +
                         "\"," + "\"description\": " + "\"" + description +
                         "\"," + "\"datecre\": " + "\"" + datecre +
         
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



        [HttpGet]
        [Route("AddConProj/{codecons}/{codeproj}")]
        public HttpResponseMessage AddConProj(int codecons, int codeproj)
        {
            string res;
            string allJson = "[";

            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                //webService.RootAddCons Consultant = new RootAddCons();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(ref Consultant); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.AddConProj(codecons, codeproj))
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
        [Route("DeletConsProj/{codecons}/{codeproj}")]
        public HttpResponseMessage DeletConsProj(int codecons, int codeproj)
        {
            string res;
            string allJson = "[";

            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                //webService.RootAddCons Consultant = new RootAddCons();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                //string text = services.ListeConsultant(ref Consultant); 

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.DeletConsProj(codecons, codeproj))
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
        [Route("ListeConstInProj/{idproject}")]
        public HttpResponseMessage ListeConstInProj(int idproject)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootConsProj ListeConsProj = new RootConsProj();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.ListeConstInProj(idproject , ref ListeConsProj);
                int i = 0;
                string id;
                string codeConsultant;
                string CodeProjet;
                string DateAfectation;


                string allJson = "[";
                int j = ListeConsProj.RecConProj.Length;
                while (i < j)
                {
                    id = ListeConsProj.RecConProj[i].id.ToString();
                    codeConsultant = ListeConsProj.RecConProj[i].codeConsultant.ToString();
                    CodeProjet = ListeConsProj.RecConProj[i].CodeProjet.ToString();
                    DateAfectation = ListeConsProj.RecConProj[i].DateAfectation.ToString();

                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"codeConsultant\": " + "\"" + codeConsultant +
                         "\"," + "\"CodeProjet\": " + "\"" + CodeProjet +
                         "\"," + "\"DateAfectation\": " + "\"" + DateAfectation +

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




        [HttpGet]
        [Route("AddReleaseToProject/{idProject}/{titre}/{description}/{date_deb}/{datefin}")]
        public HttpResponseMessage AddReleaseToProject(int idProject,string titre ,string description, DateTime date_deb, DateTime datefin)
        {
            string res;
            string allJson = "[";

            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.AddReleaseToProject(idProject,titre, description, date_deb, datefin))
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
        [Route("ListeReleaseProj/{idproject}")]
        public HttpResponseMessage ListeReleaseProj(int idproject)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootRelaseProj ListeRelease = new RootRelaseProj();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.ListeReleaseProj(ref ListeRelease, idproject);
                int i = 0;
                string id;
                string CodeProjet;
                string datecre;
                string titre;
                string desc;
                string datdeb;
                string datefin;


                string allJson = "[";
                int j = ListeRelease.RecReleaseProjet.Length;
                while (i < j)
                {
                    id = ListeRelease.RecReleaseProjet[i].id.ToString();
                    CodeProjet = ListeRelease.RecReleaseProjet[i].CodeProjet.ToString();
                    titre = ListeRelease.RecReleaseProjet[i].titre.ToString();
                    desc = ListeRelease.RecReleaseProjet[i].desc.ToString();
                    datdeb = ListeRelease.RecReleaseProjet[i].datedeb.ToString();
                    datefin = ListeRelease.RecReleaseProjet[i].datefin.ToString();
                    datecre = ListeRelease.RecReleaseProjet[i].datecrea.ToString();


                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"CodeProjet\": " + "\"" + CodeProjet +
                         "\"," + "\"titre\": " + "\"" + titre +
                         "\"," + "\"desc\": " + "\"" + desc +
                         "\"," + "\"datdeb\": " + "\"" + datdeb +
                         "\"," + "\"datefin\": " + "\"" + datefin +
                         "\"," + "\"datecre\": " + "\"" + datecre +

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


        [HttpGet]
        [Route("AddSprintToRlease/{idRelease}/{titre}/{description}/{date_deb}/{datefin}")]
        public HttpResponseMessage AddSprintToRlease(int idRelease, string titre, string description, DateTime date_deb, DateTime datefin)
        {
            string res;
            string allJson = "[";

            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                if (services.AddSprintToRlease(idRelease, titre, description, date_deb, datefin))
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
        [Route("ListeSprintRelease/{IdRelease}")]
        public HttpResponseMessage ListeSprintRelease(int IdRelease)
        {
            try
            {
                webService.DynmixProcessMangWS services = new DynmixProcessMangWS();
                webService.RootSprintRelase ListeSprint = new RootSprintRelase();
                services.Credentials = new System.Net.NetworkCredential("administrator", "Dynamix@10", "DYS");
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                services.ListeSprintRelease(ref ListeSprint, IdRelease);
                int i = 0;
                string id;
                string CodeRelease;
                string datecre;
                string titre;
                string desc;
                string datdeb;
                string datefin;


                string allJson = "[";
                int j = ListeSprint.RecSprintRelease.Length;
                while (i < j)
                {
                    id = ListeSprint.RecSprintRelease[i].id.ToString();
                    CodeRelease = ListeSprint.RecSprintRelease[i].CodeRelease.ToString();
                    titre = ListeSprint.RecSprintRelease[i].titre.ToString();
                    desc = ListeSprint.RecSprintRelease[i].desc.ToString();
                    datdeb = ListeSprint.RecSprintRelease[i].datedeb.ToString();
                    datefin = ListeSprint.RecSprintRelease[i].datefin.ToString();
                    datecre = ListeSprint.RecSprintRelease[i].datecrea.ToString();


                    allJson += "{ \"id\": " + "\"" + id +
                         "\"," + "\"CodeRelease\": " + "\"" + CodeRelease +
                         "\"," + "\"titre\": " + "\"" + titre +
                         "\"," + "\"desc\": " + "\"" + desc +
                         "\"," + "\"datdeb\": " + "\"" + datdeb +
                         "\"," + "\"datefin\": " + "\"" + datefin +
                         "\"," + "\"datecre\": " + "\"" + datecre +

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

